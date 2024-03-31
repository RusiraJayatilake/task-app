import React from 'react'

import '../assets/css/auth.css';

import AuthImage from '../components/AuthImg';
import AuthButton from '../components/AuthButton';
import GoogleAuth from '../components/GoogleAuth';

const Login = () => {
    return ( 
        <div className="bg-white relative lg:py-20 loginform">
            <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
                xl:px-5 lg:flex-row">
                <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
                    <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                        <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                            <img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" className="btn-"/>
                        </div>
                    </div>
                    <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                        <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
                            relative z-10">
                        <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Welcome to Login</p>
                        <form className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                            <div className="relative">
                                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Username</p>
                                <input placeholder="Enter username or email" type="email" className="border placeholder-gray-400 focus:outline-none
                                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                    border-gray-300 rounded-md" required/>
                            </div>
                            <div className="relative">
                                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                                    absolute">Password</p>
                                <input placeholder="Enter password" type="password" className="border placeholder-gray-400 focus:outline-none
                                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                    border-gray-300 rounded-md" required/>
                            </div>
                            <div className='flex justify-between'>
                                <div> 
                                    <input className="cursor-pointer mx-2"  type="checkbox" name="rememberme" />
                                    <span className="text-sm">Remember Me</span>
                                </div>
                                <a href='http://localhost:3000/forgotpw' className="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <AuthButton buttonText={"Login"} />
                            </div>
                        </form>
                        <div className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
                            <GoogleAuth authText={"login"} />
                        </div>
                        <p className="mt-8"> Don't have an account? <a href='http://localhost:3000/signup' className="cursor-pointer text-sm text-blue-600"> Signup</a></p>
                    </div>

                    <AuthImage />
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;