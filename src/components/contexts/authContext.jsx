import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();
  useEffect(() => {
    const unSubscrib = onAuthStateChanged(auth, (currentUser) => {
      setError(false);
      setLoading(false);
      if (currentUser) {
        const { email, photoURL } = currentUser;

        axios
          .post(
            "http://localhost:5000/login",
            {
              username: email,
              avatar: photoURL,
            },
            { withCredentials: true }
          )
          .then(() => {})
          .catch((err) => console.log(err));
        setUser(currentUser);
      } else {
        axios
          .post("http://localhost:5000/logout", {}, { withCredentials: true })
          .then(() => {})
          .catch((err) => console.log(err));
        setUser({});
      }

      return () => {
        unSubscrib();
      };
    });
  }, []);
  // register user
  const register = (email, password) => {
    setError(false);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const login = (email, password) => {
    setError(false);
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };
  return (
    <authContext.Provider
      value={{
        register,
        user,
        loading,
        error,
        login,
        auth,
        loginWithGoogle,
        logout,
      }}
    >
      {children && children}
    </authContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.element,
};
export default AuthProvider;
