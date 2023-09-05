const express = require('express');
const userController = require('../controllers/user.controller');
const verifyMailSend = require('../utils/nodemail');
const verifyToken = require('../middleware/verifyToken');
const passport = require('passport');
const uploader = require('../middleware/uploader');
// const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(userController.signup, verifyMailSend);
router.route('/login').post(userController.login, verifyMailSend);
router.get('/logout', userController.logOut);
router.put(
	'/:id',
	verifyToken,
	uploader.single('image'),
	userController.updateUser
);

// facebook login routes
router.get(
	'/facebook',
	passport.authenticate('facebook', {
		scope: ['id', 'displayName', 'photos', 'email', ''],
	})
);
router.get(
	'/facebook/callback',
	passport.authenticate('facebook', {
		successRedirect: `${process.env.CLIENT_URL}/login`,
		failureRedirect: '/api/v1/user/login/failed',
	})
);

router.get('/login/failed', (req, res) => {
	res.status(401).json({
		status: 'fail',
		message: 'failure',
	});
});
// google login routes
router.get(
	'/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: `${process.env.CLIENT_URL}/login`,
		failureRedirect: '/api/v1/user/login/failed',
	})
);

// password reset routes
router.post('/reset-password', userController.resetPassword, verifyMailSend);
router.post('/forget-password/:resetToken', userController.forgetPassword);

// user email verification route
router.route('/verify/:verificationToken').get(userController.verifyUser);

router.get('/profile', verifyToken, userController.getMe);

module.exports = router;
