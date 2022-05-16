import Home from './components/routes/home/home.component';
import React from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from './authentication/authentication.components';
import SignUpForm from './components/sign-up-form/sign-up-form.component';
import Shop from './components/shop/shop.component';
import CheckOut from './components/routes/checkout/checkout.component';


const App = () => {

  return (
     <>
    
    <Routes>
     <Route path='/' element={<Navigation/>}>
        <Route index  element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='sign-up' element={<SignUpForm/>}/>
        <Route path='checkout' element={<CheckOut/>}/>
      </Route>
    </Routes>  
  
    </>
  );
}


export default App;
