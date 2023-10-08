import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading,setLoading]=useState(true);
    const GoogleProvider = new GoogleAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();

    //google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }
    //facebook login
    const facebookLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, FacebookProvider)
    }

    //register
    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //change password
    const changePassword =(email)=>{
        return sendPasswordResetEmail(auth,email);
    }
    //signOut 
    const handleSignOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    //observation
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false);
        })
        return () => {
            return unsubscribe;
        }
    }, [])

    const authInfo = {
        handleRegister,
        userLogin,
        googleLogin,
        handleSignOut,
        facebookLogin,
        changePassword,
        loading,
        user,
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;