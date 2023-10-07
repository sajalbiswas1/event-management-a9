import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { AuthContext } from "../AuthProvider/AuthProvider";


const SignUp = () => {

    const { handleRegister } = useContext(AuthContext);
    const [errorRegister, setErrorRegister] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        // const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        // console.log(name, email, password)


        if (password.length < 6) {
            setErrorRegister('Password longer should be 6 Character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorRegister("Minimum 1  Capital Character password");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setErrorRegister("Minimum 1  Small Character password");
            return;
        }
        else if (!/\d/.test(password)) {
            setErrorRegister("Minimum 1  Capital Character Digit");
            return;
        }
        else if (!/[@$!%*?&]/.test(password)) {
            setErrorRegister("Minimum 1 icon this @ $ ! % * ? & ");
            return;
        }
        else if (!accepted) {
            setErrorRegister("Please terms accept terms & condition");
            return;
        }

        handleRegister(email, password)
            .then(result => {
    
                console.log(result)
                navigate('/')
            })
            .catch(error => {
                setErrorRegister(error.message)
                console.log(error)
            })

        //clear errorRegister
        e.target.reset()
    }

    return (
        <div className="w-1/2 m-auto border p-16 bg-[#FFF]">
        <h3 className="text-4xl font-semibold text-center mb-12">Register your account</h3>
        <hr />
        <form onSubmit={handleSubmit} className="px-6 mt-12 mb-7">
            <p className="text-xl font-semibold mb-4">Your name</p>
            <input className="border w-full  text-base font-normal p-5 bg-[#F3F3F3]" type="text" name="name" placeholder="Enter your name" id="10001" /><br />
            <p className="text-xl mt-6 font-semibold mb-4">Photo URL</p>
            <input className="border w-full  text-base font-normal p-5 bg-[#F3F3F3]" type="link" name="link" placeholder="Enter your image url" id="10002" /><br />
            <p className="text-xl mt-6 font-semibold mb-4">Email address</p>
            <input className="border w-full  text-base font-normal p-5 bg-[#F3F3F3]" type="email" name="email" placeholder="Enter your email address" required id="10003" /><br />
            <p className="mt-6 text-xl font-semibold mb-4">Password</p>
            <div className="relative">
                {
                    show ? <span onClick={() => setShow(!show)} className="absolute text-xl right-4 bottom-1/2"><BsFillEyeFill></BsFillEyeFill> </span>
                        : <span onClick={() => setShow(!show)} className="absolute text-xl right-4 bottom-1/2"><BsFillEyeSlashFill></BsFillEyeSlashFill> </span>
                }
                <input className=" border w-full text-base font-normal p-5 mb-7 bg-[#F3F3F3]" type={show ? 'text' : 'password'} name="password" placeholder="Enter your password" required id="10004" /><br />
            </div>
            <div className="gap-2 flex mb-3">
                <input type="checkbox" name="terms" />
                <label className="text-sm font-semibold text-center" htmlFor="terms"><a href="#">Terms & condition</a></label>
            </div>
            <input className="bg-[#403F3F] text-white text-xl font-semibold p-5 w-full" type="submit" name="submit" value="Register" id="" />
        </form>
        <p>Or</p>
        
        {
            errorRegister && <p className="text-base font-semibold text-center mb-7 text-red-500">{errorRegister}</p>
        }
        <p className="text-base font-semibold text-center">Do not Have An Account? <Link className="text-[#546dd1]" to={'/login'}> Login</Link></p>
    </div>
    );
};

export default SignUp;