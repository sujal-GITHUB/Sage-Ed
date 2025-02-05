import React from 'react';
import { auth, provider } from '../config/firebase.js';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice.js';  

function Login() {
  const dispatch = useDispatch();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Extract only necessary user data
      const userData = {
        uid: user.uid,
        email: user.email,
      };

      console.log(userData);

      dispatch(setUser(userData));
    } catch (error) {
      console.error("Error during sign-in: ", error.message);
    }
  };

  return (
    <button className="py-2 px-4 bg-blue-500 text-white rounded" onClick={signIn}>
      Sign in with Google
    </button>
  );
}

export default Login;
