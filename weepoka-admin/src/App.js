
import './App.css';
// import { Navigate, Route } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import ResetPass from './Pages/ResetPass/ResetPass';
import ForgotPass from './Pages/ForgotPass/ForgotPass';
import MainLayout from './Components/MainLayout/MainLayout';
import Orders from './Pages/Orders/Orders';
import Customers from './Pages/Customers/Customers';



import ProductList from './Pages/ProductList/ProductList';
import CategoryList from './Pages/CategoryList/CategoryList';

import BrandList from './Pages/BrandList/BrandList';
import AddProduct from './Pages/AddProduct/AddProduct';
import AddCategory from './Pages/AddCategory/AddCategory';
import AddBrand from './Pages/AddBrand/AddBrand';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import { Switch } from 'antd';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/reset-pass' element={<ResetPass/>}></Route>
      <Route path='/forget-pass' element={<ForgotPass/>}></Route>
      <Route path='/admin' element={<MainLayout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path='customers' element={<Customers/>}></Route>
        <Route path='product' element={<AddProduct/>}></Route>

  
<Route path='list-product' element={<ProductList/>}></Route>
       



     
        
                

        
        <Route path='brand' element={<AddBrand/>}></Route>
        <Route path='list-brand' element={<BrandList/>}></Route>
       
        <Route path='category' element={<AddCategory/>}></Route>
        <Route path='list-category' element={<CategoryList/>}></Route>
        <Route path='orders' element={<Orders/>}></Route>
        
        
      
      {/* <Route path='updateProduct/:id' element={<UpdateProduct/>}></Route> */}
      </Route>
      <Route path='/updateProduct/:id' element={<UpdateProduct/>} 
      ></Route>

    </Routes>
       
    </Router>
  );
}

export default App;
