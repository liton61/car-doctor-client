/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="bg-gray-100 flex items-center justify-center py-16">
                <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" placeholder="Enter your password" required />
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="btn btn-primary w-full">Login</button>
                        </div>
                    </form>
                    <p className="text-gray-600 text-sm text-center">Don't have an account? <a href="/register" className="text-primary">Register</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;