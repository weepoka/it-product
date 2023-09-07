import AdminLayout from '../Admin/Layout/AdminLayout';
import Login from '../Login/Login';
import CheckOut from '../pages/Home/CheckOut/CheckOut';

import Home from '../pages/Home/Home/Home';
import Products from '../pages/Home/Products/Products';
import ProductMoreInfo from '../pages/Home/ProductsDetails/ProductMoreInfo/ProductMoreInfo';
import ProductReview from '../pages/Home/ProductsDetails/ProductReview/ProductReview';
import SingleProductDetials from '../pages/Home/ProductsDetails/SingleProductDetials';
import Orders from '../pages/Orders/Orders';
import Header from '../pages/Shared/Header/Header';
import SearchResults from '../pages/Shared/Header/SearchProduct/SearchResults';
import SignUp from '../pages/SignUp/SignUp';
import Dashboard from './../Admin/DashBoard/Dashboard/Dashboard';
import SearchProducts from './../pages/Shared/Header/SearchProduct/SearchProducts';
import Offer from './../pages/Home/Offer/Offer';
import PrivateRoutes from './PrivateRoutes';
import Cart from '../../components/Cart/Cart';
import NotFound from '../../../src/components/NotFound/NotFound';
import AdminOrders from '../Admin/DashBoard/AdminOrders/AdminOrders';
import AdminProducts from './../Admin/DashBoard/AdminProducts/AdminProducts';
import AdminAddProducts from '../Admin/DashBoard/AdminAddProducts/AdminAddProducts';
import AdminUpdateProduct from './../Admin/DashBoard/AdminUpdateProducts/AdminUpdateProduct';
import CategoryItems from '../pages/Home/CategoryItems/CategoryItems';
import PaymentSuccess from '../pages/Payment/PaymentSuccess';
import PaymentFail from '../pages/Payment/PaymentFail';
import Profile from '../pages/Profile/Profile';
import CategoryProducts from '../pages/Home/CategoryProducts/Desktop/Desktop';
import AdminRoutes from './AdminRoutes';
import Update from '../pages/Profile/Update';
import AddBanner from '../Admin/DashBoard/AdminBanner/AddBanner';
import AdminBanner from '../Admin/DashBoard/AdminBanner/AdminBanners';
import OrderDetails from '../pages/Profile/OrderDetails';
import AdminSingleOrder from '../Admin/DashBoard/AdminOrders/AdminSingleOrder';
import Contact from '../pages/Contact/Contact';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import ResetPassword from '../ForgetPassword/ResetPassword';

const { createBrowserRouter } = require('react-router-dom');
const { default: Main } = require('../Layout/Main');

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		loader: async () => {
			return fetch('https://weepoka.vercel.app/products');
		},
		children: [
			{
				path: '/',
				element: <Home></Home>,
				loader: async () => {
					return fetch('https://weepoka.vercel.app/products');
				},
			},
			{
				path: 'home',
				element: <Home></Home>,
				loader: async () => {
					return fetch('https://weepoka.vercel.app/products');
				},
			},
			{
				path: '/ContactUs',
				element: <Contact></Contact>,
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/resetPassword',
				element: <ResetPassword />,
			},
			{
				path: '/forgetPassword/:resetToken',
				element: <ForgetPassword />,
			},
			{
				path: '/offer',
				element: <Offer></Offer>,
			},
			//! ==========> Modifide <==============
			{
				path: '/SingleProductDetails/:id',
				element: <SingleProductDetials> </SingleProductDetials>,

				// loader: async ({ params }) => {
				//   console.log(params.productId);
				//   return fetch(
				//     `https://weepoka.vercel.app/products/${params.productId}`
				//   );
				// },
			},
			{
				path: '/product/:productId',
				element: <Header> </Header>,

				// loader: async ({ params }) => {
				//   console.log(params.productId);
				//   return fetch(
				//     `https://weepoka.vercel.app/products/${params.productId}`
				//   );
				// },
			},

			{
				path: '/SingleProductDetails/ProductMoreInfoDetails/:productId',
				element: <ProductMoreInfo></ProductMoreInfo>,

				// loader: async ({ params }) => {
				//   console.log(params.productId);
				//   return fetch(
				//     `https://weepoka.vercel.app/products/${params.productId}`
				//   );
				// },
			},
			{
				path: '/SingleProductDetails/ProductReview/:productId',
				element: <ProductReview></ProductReview>,

				// loader: async ({ params }) => {
				//   console.log(params.productId);
				//   return fetch(
				//     `https://weepoka.vercel.app/products/${params.productId}`
				//   );
				// },
			},
			{
				path: '/checkout/:id',
				element: (
					<PrivateRoutes>
						<CheckOut></CheckOut>
					</PrivateRoutes>
				),
				// loader: ({ params }) =>
				//   fetch(`https://weepoka.vercel.app/products/${params.id}`),
			},
			{
				path: '/orders',
				element: <Orders></Orders>,
			},
			{
				path: '/searchProduct',
				element: <SearchResults></SearchResults>,
			},
			{
				path: 'cart',
				element: (
					<PrivateRoutes>
						<Cart />
					</PrivateRoutes>
				),
			},
			{
				path: '/categoryItems',
				element: <CategoryItems />,
			},
			{
				path: '/payment/success/:id',
				element: (
					<PrivateRoutes>
						<PaymentSuccess />
					</PrivateRoutes>
				),
			},
			{
				path: '/payment/fail',
				element: (
					<PrivateRoutes>
						<PaymentFail />
					</PrivateRoutes>
				),
			},
			{
				path: '/category/:id',
				element: <CategoryProducts />,
			},
			{
				path: '/profile',
				element: (
					<PrivateRoutes>
						<Profile />
					</PrivateRoutes>
				),
			},

			{
				path: '/profile/:id',
				element: (
					<PrivateRoutes>
						<Update />
					</PrivateRoutes>
				),
			},
			{
				path: '/order/:id',
				element: (
					<PrivateRoutes>
						<OrderDetails />
					</PrivateRoutes>
				),
			},
		],
	},

	{
		path: '/admin',
		element: (
			<AdminRoutes>
				<AdminLayout></AdminLayout>
			</AdminRoutes>
		),
		children: [
			{
				path: '/admin',
				element: <Dashboard></Dashboard>,
			},
			{
				path: 'dashboard',
				element: <Dashboard></Dashboard>,
			},
			{
				path: 'adminAddBanner',
				element: <AddBanner></AddBanner>,
			},
			{
				path: 'adminBanners',
				element: <AdminBanner />,
			},
			{
				path: 'adminOrders',
				element: <AdminOrders></AdminOrders>,
			},
			{
				path: 'adminOrders/:id',
				element: <AdminSingleOrder />,
			},
			{
				path: 'adminProducts',
				element: <AdminProducts></AdminProducts>,
			},
			{
				path: 'adminAddProducts',
				element: <AdminAddProducts></AdminAddProducts>,
			},
		],
	},
	{
		path: 'adminUpdateProduct/:id',
		element: <AdminUpdateProduct></AdminUpdateProduct>,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
export default router;
