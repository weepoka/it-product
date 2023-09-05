const { signupService, findUserByEmail } = require('../services/user.service');
const { generateToken } = require('../utils/token');
const User = require('../models/User');

exports.signup = async (req, res, next) => {
	try {
		console.log('data', req.body);
		const isUserAxist = await User.findOne({ email: req.body.email });
		// console.log(isUserAxist);
		if (!isUserAxist) {
			const user = await signupService(req.body);
			req.user = user;
			return next();
		}
		if (!isUserAxist.isVerified) {
			req.user = isUserAxist;
			return next();
		}
		console.log(isUserAxist);

		return res.status(409).json({
			success: false,
			message: 'you already have an account please login',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

/**
 *
 * @param {check email and password are given } req
 * @param {Load user with email} res
 * @param {if not user send res} res
 * @param {compare password} res
 * @param {If password not correct send res} res
 * @param {check if user is verified} res
 * @param {if not verified send res} res
 * @param {send user and token} res
 *
 */

exports.login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		if (!email || !password)
			return res.status(401).json({
				success: false,
				message: 'please provide your credential',
			});

		const user = await findUserByEmail(email);
		if (!user) {
			return res.status(401).json({
				success: false,
				message: 'No user found. Please create an account',
			});
		}

		// * checking is password valid or not

		const isPasswordValid = user.comparePassword(password, user.password);

		if (!isPasswordValid) {
			return res.status(401).json({
				success: false,
				message: 'Invalid credential',
			});
		}

		if (!user.isVerified) {
			req.user = user;

			return next();
		}

		const token = generateToken(user);

		const { password: pwd, ...other } = user.toObject();

		res.cookie('loginSession', token, {
			expires: new Date(Date.now() + 604800000),
			// 604800000
			httpOnly: true,
			secure: true,
		});

		res.status(200).json({
			success: true,
			message: 'Successfully logged in',
			data: {
				user: other,
				token,
			},
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({
			success: false,
			message: 'inernal server error',
		});
	}
};

exports.logOut = (req, res, next) => {
	res?.clearCookie('loginSession');
	res?.clearCookie('session');
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		res.send('DONE');
	});
};

exports.resetPassword = async (req, res, next) => {
	try {
		const email = req.body.email;

		const user = await User.findOne({ email });
		const token = generateToken(user, '3m');

		const updatedUser = await User.findOneAndUpdate(
			{ email },
			{ passwordResetToken: token },
			{
				upsert: true, // Set to true to enable upsert behavior
				new: true, // Return the modified document after update
				runValidators: true,
			}
		);

		if (!user) {
			return res.status(401).json({
				status: 'fail',
				message:
					'this account does not have an account please create an account',
			});
		}

		req.resetToken = updatedUser.passwordResetToken;
		next();
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			error,
		});
	}
};

exports.forgetPassword = async (req, res) => {
	try {
		const passwordResetToken = req?.params?.resetToken;

		const user = await User.findOne({ passwordResetToken });
		const hashedPassword = user.createHashedPassword(req.body.password);

		const resetPasswordUser = await User.findOneAndUpdate(
			{
				passwordResetToken,
			},
			{ passwordResetToken: '', password: hashedPassword },
			{ new: true }
		);

		if (!resetPasswordUser) {
			return res.status(401).json({
				status: 'fail',
				message: 'Link does not exist',
			});
		}

		res.status(200).json({
			status: 'success',
			message: 'Password successfully changed',
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			error,
		});
	}
};

exports.updateUser = async (req, res) => {
	try {
		const _id = req.params.id;
		let updateData;
		let image;
		console.log(req.file);
		if (req.file) {
			updateData = JSON.parse(req.body.profile); // Updated data from the request body
			const imageUrl = `${process.env.APP_URL}/images/${req.file.filename}`;

			updateData.image = imageUrl;
		} else {
			updateData = req.body;
		}
		console.log(updateData, _id);

		// Find the user by ID and update it
		const updatedProfile = await User.findByIdAndUpdate(_id, updateData, {
			new: true,
		});
		res.status(200).json({
			success: true,
			message: 'profile updated',
			data: updatedProfile,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'internal server errro',
		});
	}
};

exports.getMe = async (req, res) => {
	try {
		let user;
		const facebookId = req.user.facebookId;
		if (facebookId) {
			user = await User.findOne({ facebookId });
		} else {
			user = await findUserByEmail(req.user?.email);
		}
		const { password: pwd, ...other } = user.toObject();

		return res.status(200).json({
			success: true,
			user: other,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error,
		});
	}
};

exports.verifyUser = async (req, res) => {
	const verifyContent = `
    <html>
      <head>
        <title>Verify email</title>
      </head>
      <body>
        <h1 style="text-align:center;color:white; margin:3rem auto 0 auto;background-color:green;width:300px;padding:50px;">Email verified</h1>
		<div className="" style="text-align:center">
		<a href="${process.env.REACT_APP_LOGIN_URL}" target="_blank" style="text-align:center;color:white; margin:3rem auto 0 auto;background-color:red;padding:20px;text-decoration:none;font-size:20px;font-weight:bold">Go to login page</a>
		</div>

        
      </body>
    </html>
  `;
	try {
		const userId = req.params.verificationToken;

		// console.log(userId);

		const verifyUser = await User.updateOne(
			{ _id: userId },
			{ isVerified: true },
			{ new: true }
		);

		res.send(verifyContent);
	} catch (error) {
		res.status(500).send('Something went wrong');
	}
};
