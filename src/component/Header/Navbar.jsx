import { AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 w-10/12 m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <AiOutlineMenu className='text-xl'></AiOutlineMenu>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to={'/'}><p className="text-xl font-medium mr-5 px-5 py-2 rounded-lg hover:bg-slate-100">Home</p></NavLink>
                        <NavLink to={'/about'}><p className="text-xl font-medium mr-5 px-5 py-2 rounded-lg hover:bg-slate-100">About</p></NavLink>
                        <NavLink  to={'/contact'}><p className="text-xl font-medium mr-5 px-5 py-2 rounded-lg hover:bg-slate-100">Contact Us</p></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-5xl"><span className="text-[#fd5884]">Y</span>oga</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to={'/'}><p className="text-xl font-medium mr-5 px-5 py-2 rounded-lg hover:bg-slate-100">Home</p></NavLink>
                        <NavLink to={'/about'}><p className="text-xl font-medium mr-5 px-5 py-2 rounded-lg hover:bg-slate-100">About</p></NavLink>
                        <NavLink  to={'/contact'}><p className="text-xl font-medium mr-5 px-5 py-2 rounded-lg hover:bg-slate-100">Contact Us</p></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/login'}><button className='text-white bg-stone-700 rounded-lg px-5 py-2 text-lg font-bold'>Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;