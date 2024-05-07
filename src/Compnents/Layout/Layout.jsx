import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = ({userData,setUserData})=> {
  return (
    <>
      <Header userData = {userData} setUserData={setUserData}/>
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
export default Layout