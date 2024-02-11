/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../../authentication/Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import google from '../../assets/icons/google.jpg';
import login from '../../assets/images/login/login.svg';


const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const usersInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                }
                axiosPublic.post('/users', usersInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const formInfo = { email, password };
        console.log(formInfo);

        signIn(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    title: "Good job !",
                    text: "You you have successfully login !",
                    icon: "success"
                });
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="bg-base-200 flex justify-center items-center min-h-screen">
            <div className="lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-0 px-5 py-10">
                <div>
                    <img src={login} alt="" />
                </div>
                <div className="bg-white p-8 rounded border border-[#FF3811]">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter your password" required />
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full bg-[#FF3811] text-white py-2 px-4 rounded-lg font-medium">Login</button>
                        </div>
                        <div className="mb-6 flex justify-center items-center">
                            <img onClick={handleGoogleLogin} className='w-16 h-16 rounded-full cursor-pointer' src={google} alt="" />
                        </div>
                    </form>
                    <p className="text-gray-600 text-sm text-center">Don't have an account? <Link to="/register" className="text-[#FF3811]">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;