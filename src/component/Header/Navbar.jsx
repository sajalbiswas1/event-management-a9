import { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Navbar = () => {
    const { user, handleSignOut } = useContext(AuthContext)
    return (
        <div className=''>
            <div className="navbar bg-base-100 md:w-10/12 m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <AiOutlineMenu className='text-xl'></AiOutlineMenu>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to={'/'}><p className="text-xl font-medium mr-5 px-5 py-2 rounded-lg hover:bg-slate-100">Home</p></NavLink>
                            <NavLink to={'/schedule'}><p className="text-xl font-medium mr-5 px-5 py-2 rounded-lg hover:bg-slate-100">Schedule</p></NavLink>
                            <NavLink to={'/shop'}><button className="text-xl active font-medium mr-5 px-5 py-2 rounded-lg hover:bg-slate-100">shop</button></NavLink>
                        </ul>
                    </div>

                    <h3 className="btn btn-ghost text-center normal-case md:text-5xl text-2xl text-[#fd5884]"> Y<span className='text-[#1F2937]'>oga</span></h3>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to={'/'}><p className="text-xl font-medium mr-5 px-5 py-2 rounded-lg hover:bg-slate-100">Home</p></NavLink>
                        <NavLink to={'/schedule'}><p className="text-xl font-medium mr-5 px-5 py-2 rounded-lg hover:bg-slate-100">Schedule</p></NavLink>
                        <NavLink to={'/shop'}><button className="text-xl font-medium  px-5 py-2 rounded-lg hover:bg-slate-100">Shop</button></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className='flex items-center gap-3 pr-4'>
                            <p className='text-xs'>{user.displayName}</p>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className=""><img className='w-10 h-10 m-auto rounded-full' src={user.photoURL === null? "https://i.ibb.co/VB17ZCv/user.png" : user?.photoURL} alt="" /></label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a onClick={handleSignOut}>Sign Out</a></li>
                                    </ul>
                                </div>
                               
                            </div>
                            <Link ><button onClick={handleSignOut} className='text-white bg-stone-700 rounded-lg px-5 md:block hidden py-2 text-lg font-bold'>SignOut</button></Link>
                        </>
                            : <Link to={'/login'}><button className='text-white bg-stone-700 rounded-lg px-5  py-2 text-lg font-bold'>Login</button></Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;