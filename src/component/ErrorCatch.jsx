import { Link } from "react-router-dom";


const ErrorCatch = () => {
    return (
        <div className="w-10/12 m-auto">
            <p className="text-center mt-32 text-2xl font-medium pb-5">not found page</p>
            <Link to={'/'}> <p className="text-center text-bold text-xl bg-slate-800 text-white px-3 py-1 rounded-lg w-2/12 m-auto">Go Back Home</p></Link>
        </div>
    );
};

export default ErrorCatch;