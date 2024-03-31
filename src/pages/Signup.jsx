import React, {useState} from 'react'

import firebase from '../config/firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import AuthImage from '../components/AuthImg';
import AuthButton from '../components/AuthButton';
import GoogleAuth from '../components/GoogleAuth';

const SignUp = () => {
    // const [userName, setUserName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const auth = getAuth(); 
    
    const clearForm = () => { 
        setEmail(""); 
        setPassword("");  
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userData.user;
        } catch (err) {
            console.error("Error signing up", err);
            const errCode = err.code;

            switch (errCode) {
                case "auth/weak-password":
                    setErrorMessage("The password is too weak.");
                    alert("The password is too weak.");
                    break;
                case "auth/email-already-in-use":
                    setErrorMessage("This email address is already in use by another account.");
                    alert("This email address is already in use by another account.");
                case "auth/invalid-email":
                    setErrorMessage("This email address is invalid.");
                    alert("This email address is invalid.");
                    break;
                case "auth/operation-not-allowed":
                    setErrorMessage("Email/password accounts are not enabled.");
                    alert("Email/password accounts are not enabled.");
                    break;
                default:
                    setErrorMessage(errorMessage);
                    break;
            }
        }
        
        clearForm();
    }

    return ( 
        <div className="bg-white relative lg:py-20">
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
                                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Sign up</p>
                                {/* Signup form section*/}
                                <form className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8" onSubmit={handleSubmit}>
                                    {/* Username section*/}
                                    {/* <div className="relative">
                                        <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                                            absolute">Username</p>
                                        <input value={userName} onChange={(e) => setUserName(e.target.value)} 
                                            placeholder="Username" type="text" className="border placeholder-gray-400 focus:outline-none
                                            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                            border-gray-300 rounded-md" 
                                            required    
                                        />
                                    </div> */}
                                    {/* Email section*/}
                                    <div className="relative">
                                        <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                                        <input value={email} onChange={handleChange} name='email'
                                            placeholder="Email" type="email" className="border placeholder-gray-400 focus:outline-none
                                            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                            border-gray-300 rounded-md"
                                            required    
                                        />
                                    </div>
                                    {/* Password section*/}
                                    <div className="relative">
                                        <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                                            absolute">Password</p>
                                        <input value={password} onChange={handleChange} name='password'
                                            placeholder="Password more that 6 characters" type="password" className="border placeholder-gray-400 focus:outline-none
                                            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                            border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                    {/* Signup button section*/}
                                    <div className="relative">
                                        <AuthButton buttonText={"Signup"}/>
                                    </div>
                                </form>
                                <div className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
                                    <GoogleAuth authText={"sign-in"} />
                                </div>
                                
                                <p className="mt-8"> Already an signup? <a href='http://localhost:3000/' className="cursor-pointer text-sm text-blue-600"> Login</a></p>
                            </div>
                        <AuthImage />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;