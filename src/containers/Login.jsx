import React from "react";
import Bgvideo from "../assets/video/bg.mp4";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { app } from "../config/firebase.config";
import { validateJWTToken } from "../api";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const firebaseauth = getAuth(app)
  const google_Provider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const loginwithgoogle = async () => {
    await signInWithPopup(firebaseauth,google_Provider).then(userCred => {
      firebaseauth.onAuthStateChanged(userCred => {
        if(userCred){
          userCred.getIdToken().then (token => {
            validateJWTToken(token).then(data => {
              console.log(data);
              navigate("/",{replace:true});
            });
          });
        };
      });
    });
  };
  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      <video
        className="absolute inset-0 object-cover"
        src={Bgvideo}
        autoPlay
        loop
        muted
        type="video/mp4"
      />
      <div className="z-10 w-full h-full flex flex-col items-center justify-center bg-bgoverlay ">
        <div className="bg-lightoverlay px-4 py-2 rounded-md backdrop-blur-md flex flex-col items-center justify-center gap-4">
          <p className="text-xl text-blue-100 font-semibold">
            Sign in with following
          </p>
          <motion.div 
          onClick={loginwithgoogle}
          whileTap={{scale:0.65}} className="flex items-center justify-center w-full gap-3 bg-slate-300 px-4 py-2 rounded-3xl cursor-pointer hover:bg-gray-300 ">
            <FcGoogle className="text-3xl"/>
            <p>Sign in with Twitter </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
