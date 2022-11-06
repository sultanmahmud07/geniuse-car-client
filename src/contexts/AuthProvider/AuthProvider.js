import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext =createContext();
const auth =getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] =useState(null);
  const [loading, setLoding] =useState(true);

//Create a new user with email and password...
  const createUser = (email, password) => {
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };


  //Sign In with email and password......
  const logIn = ( email, password) => {
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, password);
  }


//sign In with google..........




//Sign Out...
const logOut = () =>{
  return signOut(auth)
}

  //State user changed....
  useEffect(() =>{
    const unsubsribe = onAuthStateChanged(auth, currentUser =>{
      console.log(currentUser);
      setUser(currentUser);
      setLoding(false);
    })
   
    return () =>{
      return unsubsribe()
    }
  }, [])


// Puse all auth context......
  const authInfo = { user, loading, createUser, logIn, logOut };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;