import { Link } from "react-router-dom";
import logo from '../../assets/icons/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../authPage/Provider/AuthProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navItems = <>
        <li className="text-base font-medium"><Link to="/"><button>Home</button></Link></li>
        {
            user?.email ? <>
                <li className="text-base font-medium"><Link to="/booking"><button>Booking</button></Link></li>
                <li className="text-base font-medium">
                    <Link to="/login">
                        <button onClick={handleLogOut}>Log Out</button>
                    </Link>
                </li>
            </>
                :
                <li className="text-base font-medium">
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </li>
        }
    </>
    return (
        <div>
            <div className="navbar p-5">
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
                    <button className="btn btn-outline btn-primary">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Header;