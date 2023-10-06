import { Link } from "react-router-dom";


const ErrorCatch = () => {
    return (
        <div>
            <p>This page is Not Found</p>
            <Link to={'/'}><button>Go Back Home</button></Link>
        </div>
    );
};

export default ErrorCatch;