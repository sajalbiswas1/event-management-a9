import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { ToastContainer } from "react-toastify";


const Root = () => {
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