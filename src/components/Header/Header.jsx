import { Link } from "react-router-dom";
import logo from '../../assets/icons/logo.svg';


const Header = () => {
    const navItems = <>
        <li className="text-base font-medium"><Link to="/home">Home</Link></li>
        <li className="text-base font-medium"><Link to="/about">About</Link></li>
        <li className="text-base font-medium"><Link to="/service">Service</Link></li>
        <li className="text-base font-medium"><Link to="/blog">Blog</Link></li>
        <li className="text-base font-medium"><Link to="/contact">Contact</Link></li>
    </>
    return (
        <div>
            <div className="navbar p-10 bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline btn-warning">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Header;