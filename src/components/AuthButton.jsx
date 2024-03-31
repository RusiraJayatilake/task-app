import React from 'react'

const AuthButton = ({buttonText}) => {
    return (
        <button className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
            rounded-lg transition duration-200 hover:bg-indigo-600 ease">{buttonText}</button> 
    );
}
 
export default AuthButton;