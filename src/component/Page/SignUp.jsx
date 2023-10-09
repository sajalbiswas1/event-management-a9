import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { RiContactsLine } from "react-icons/ri";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {

    const { handleRegister, userProfileUpdate } = useContext(AuthContext);
    const [errorRegister, setErrorRegister] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const url = e.target.url.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        const obj = { displayName: name, photoURL: url }

        // console.log(name, email, password)
        //user update
        const userUpdate = () => {
            userProfileUpdate(obj)
                .then(result => {
                    console.log(result)
                })
                .catch(error => {
                    console.log(error)
                })
        }


        //toast
        const notify = () => toast.success("SignUp Successfully!", {
            position: toast.POSITION.TOP_CENTER
        });
        const notify2 = () => toast.error("Already Use email", {
            position: toast.POSITION.TOP_CENTER
        });



        if (password.length < 6) {
            setErrorRegister('is less than 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorRegister("don't have a capital letter");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setErrorRegister("don't have a small letter");
            return;
        }
        else if (!/\d/.test(password)) {
            setErrorRegister("don't have a Digit");
            return;
        }
        else if (!/[@$!%*?&]/.test(password)) {
            setErrorRegister("don't have a special character");
            return;
        }
        else if (!accepted) {
            setErrorRegister("don't have terms & condition");
            return;
        }

        handleRegister(email, password)
            .then(result => {
                notify()
                userUpdate()
                console.log(result)
                navigate('/')
            })
            .catch(error => {
                notify2()
                setErrorRegister(error.message)
                console.log(error)
            })

        //clear errorRegister
        e.target.reset()
    }

    return (
        <div className="w-2/5 m-auto border p-16 bg-gradient-to-r from-[#ffe5e5]  to-[#fdfdde]">
            <h3 className="text-4xl font-semibold text-center mb-4">Sign Up</h3>
            <p className="w-6 m-auto rounded-full flex justify-center mb-2 text-3xl  "><RiContactsLine className="w-5"></RiContactsLine></p>
            <hr />
            <form onSubmit={handleSubmit} className="px-6 mt-4 mb-4">
                <p className="text-lg font-medium mb-2">Your name</p>
                <input className="border w-full  rounded-3xl text-base font-normal px-5 py-2 bg-[#F3F3F3]" type="text" name="name" placeholder="Enter your name" required id="10001" /><br />
                <p className="text-lg mt-4 font-medium mb-2">Photo URL</p>
                <input className="border w-full  rounded-3xl text-base font-normal px-5 py-2 bg-[#F3F3F3]" type="url" name="url" placeholder="Enter your image url" id="10002" /><br />
                <p className="text-lg font-medium mt-4 mb-2">Email address</p>
                <input className="border w-full  rounded-3xl text-base font-normal px-5 py-2 bg-[#F3F3F3]" type="email" name="email" placeholder="Enter your email address" required id="10003" /><br />
                <p className="mt-4 text-lg font-medium mb-2">Password</p>
                <div className="relative">
                    {
                        show ? <span onClick={() => setShow(!show)} className="absolute text-xl right-4 bottom-1/3"><BsFillEyeFill></BsFillEyeFill> </span>
                            : <span onClick={() => setShow(!show)} className="absolute text-xl right-4 bottom-1/3"><BsFillEyeSlashFill></BsFillEyeSlashFill> </span>
                    }
                    <input className=" border w-full rounded-3xl text-base font-normal px-5 py-2 mb-2 bg-[#F3F3F3]" type={show ? 'text' : 'password'} name="password" placeholder="Enter your password" required id="10004" /><br />
                </div>
                <div className="gap-2 flex mb-3">
                    <input type="checkbox" name="terms" />
                    <label className="text-sm font-medium text-center" htmlFor="terms"><a href="#">Terms & condition</a></label>
                </div>
                <input className="bg-[#403F3F] text-white rounded-3xl text-xl font-semibold px-5 py-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" type="submit" name="submit" value="Register" id="" />
            </form>
            {
                errorRegister && <p className="text-base font-semibold text-center mb-7 text-red-500">{errorRegister}</p>
            }
            <p className="flex items-center justify-center mx-6 mt-4 gap-2 text-lg font-bold"> <hr className="border-black w-1/6" /> Or <hr className="border-black w-1/6" /></p>
            <p className="text-base font-semibold text-center">Do not Have An Account? <Link className="text-[#546dd1]" to={'/login'}> Login</Link></p>
        </div>
    );
};

export default SignUp;