import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "./AuthProvider/AuthProvider";

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location} to={'/login'}></Navigate>
};
PrivetRoute.propTypes = {
    children: PropTypes.node
}

export default PrivetRoute;