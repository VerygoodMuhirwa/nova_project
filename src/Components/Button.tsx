import GoogleButton from "react-google-button";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "./Firebase";
import { useEffect, useState } from "react";

const logout= ()=>{
    signOut(auth)
}

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

const handleGoogleSignIn = async () => {
  try {
    await googleSignIn();
  } catch (error) {
    console.log(error);
  }
};
const Button = () => {
  const [user, setUser] = useState<null | Object>({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <div>
      <GoogleButton 
      title="Sign up with Google" 
       onClick={handleGoogleSignIn} />
    </div>
  );
};

export default Button;
