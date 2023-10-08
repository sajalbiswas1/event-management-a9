
import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";

const Login = () => {

    const { userLogin, changePassword,googleLogin } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [errorLogin, setErrorLogin] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);
    const navigate = useNavigate()
    const location = useLocation();


    const handleForget = () => {
        setErrorLogin('')
        const emailRf = emailRef.current.value
        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailRf)) {
            setErrorLogin('Invalid Email')
            return;
        }
        changePassword(emailRf)
            .then(result => {
                setSuccess('SuccesFully Sent email, check email')
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    //login with google
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result)
            //go to home
            navigate(location?.state ? location.state : '/')

        })
        .catch(error => {
            //set error
            setErrorLogin(error.message)
            console.log(error)
        })

    }

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        //clear errorLogin
        setErrorLogin('')

        userLogin(email, password)
            .then(result => {
                result
                //go to home
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                //set error
                setErrorLogin(error.message)
                console.log(error)
            })

        e.target.reset()
    }


    return (
        <div className="w-1/2 m-auto border p-16 bg-[#FFF]">
            <h3 className="text-4xl font-semibold text-center mb-12">Login your account</h3>
            <hr />
            <form className="px-6 mt-12 mb-2" onSubmit={handleLogin}>
                <p className="text-xl font-semibold mb-4">Email address</p>
                <input className="border w-full  text-base font-normal p-5 bg-[#F3F3F3]" type="email" required ref={emailRef} name="email" placeholder="Enter your email address" id="" /><br />
                <p className="mt-6 text-xl font-semibold mb-4">Password</p>
                <div className="relative">
                    {
                        show ? <span onClick={() => setShow(!show)} className="absolute text-xl right-4 bottom-1/2"><BsFillEyeFill></BsFillEyeFill> </span>
                            : <span onClick={() => setShow(!show)} className="absolute text-xl right-4 bottom-1/2"><BsFillEyeSlashFill></BsFillEyeSlashFill> </span>
                    }
                    <input className=" border w-full text-base font-normal p-5 mb-7 bg-[#F3F3F3]" type={show ? 'text' : 'password'} name="password" placeholder="Enter your password" required id="10004" /><br />
                </div>
                <Link><p onClick={handleForget} className="text-base font-semibold text-left mb-3">Forgotten password? </p></Link>
                <input className="bg-[#403F3F] text-white text-xl font-semibold p-5 w-full" type="submit" name="submit" value="Login " id="" />
            </form>
            {
                errorLogin && <p className="text-base font-semibold text-center mb-2 text-red-500">{errorLogin}</p>
            }
            {
                success && <p className="text-base font-semibold text-center mb-2 text-green-400">{success}</p>
            }
            <p className="flex items-center justify-center mx-6 mt-4 gap-2 text-lg font-bold"> <hr className="border-black w-1/6" /> Or <hr className="border-black w-1/6"/></p>
            <div>
            <div onClick={handleGoogleLogin} className='flex items-center hover:text-blue-700 mt-5  mx-2 py-2 justify-center gap-3 hover:border-blue-700 rounded-md border-2 mb-4 border-black'>
                <AiOutlineGoogle></AiOutlineGoogle>
                <Link>LogIn with google</Link>
            </div>
            <div className='flex items-center hover:text-blue-700  mx-2 py-2 justify-center gap-3 hover:border-blue-700 rounded-md border-2 mb-4 border-black'>
                <AiOutlineGithub></AiOutlineGithub>
                <p>LogIn with github</p>
            </div>
            </div>
            
            <p className="text-base font-semibold text-center">Do not Have An Account? <Link className="text-[#5b66e0]" to={'/signUp'}> Register</Link></p>
        </div>
    );
};

export default Login;