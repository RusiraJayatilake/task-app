import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth } from '@firebase/auth';

const GoogleAuth = ({authText}) => {
    const [errorMessage, setError] = useState(false);
    const [googleErrorMessage, setGoogleErrorMessage] = useState("");

    const auth = getAuth();

    // handle google sign in
    const handleGoogleSignup = async () => {
        // e.preventDefault();
        const provider = new GoogleAuthProvider();
        try{
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
        } catch (err) {
            console.error("Error signing up", err);
            const errCode = err.code;

            setError(true);

            switch (errCode) {
              case "auth/operation-not-allowed":
                setGoogleErrorMessage("Email/password accounts are not enabled.");
                break;
              case "auth/operation-not-supported-in-this-environment":
                setGoogleErrorMessage("HTTP protocol is not supported. Please use HTTPS.")
                break;
              case "auth/popup-blocked":
                setGoogleErrorMessage("Popup has been blocked by the browser. Please allow popups for this website.")
                break;
              case "auth/popup-closed-by-user":
                setGoogleErrorMessage("Popup has been closed by the user before finalizing the operation. Please try again.")
                break;
              default:
                setGoogleErrorMessage(errorMessage);
                break;  
            }
        }
    }

    // handle google login
    const handleGoogleLogin = async () => {
      // e.preventDefault();
      const provider = new GoogleAuthProvider();
      try{
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
      } catch (err) {
          console.error("Error login up", err);
          const errCode = err.code;

          setError(true);

          switch (errCode) {
              case "auth/operation-not-allowed":
                setGoogleErrorMessage("Email/password accounts are not enabled.");
                break;
              case "auth/operation-not-supported-in-this-environment":
                setGoogleErrorMessage("HTTP protocol is not supported. Please use HTTPS.")
                break;
              case "auth/popup-blocked":
                setGoogleErrorMessage("Popup has been blocked by the browser. Please allow popups for this website.")
                break;
              case "auth/popup-closed-by-user":
                setGoogleErrorMessage("Popup has been closed by the user before finalizing the operation. Please try again.")
                break;
              default:
                setGoogleErrorMessage(errorMessage);
                break;
          }
      }
    } 


    const handleGoogleAuth = () => {
      if (authText === "sign-in") {
        return handleGoogleSignup()
      } else if (authText === "login") {
        alert ("Login clicked")
      }
    };
    
    
    return ( 
        <div onClick={handleGoogleAuth} className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
            <img className=" h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt=""/>
            <button >Or {authText} with google</button>
        </div>
    );
}
 
export default GoogleAuth;