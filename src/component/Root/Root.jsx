import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { ToastContainer } from "react-toastify";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Root = () => {

    useEffect(()=>{
        AOS.init({duration:"1000"})
    },[])

    return (
        <div> 
          <Navbar></Navbar>          
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;