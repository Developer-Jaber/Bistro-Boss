import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/Firebase.config'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loder,setLoder] = useState(true);

  // Create User Using Email And Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //   popup login with google
  const popupGoogle = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  // focus on user with caredential
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('state_captured',currentUser);
        setLoder(false)
    })

    return ()=>{
        unSubscribe();
    }
  },[])

  // logOut user
  const logoutUser = () => {
        return signOut(auth);
  }   

  const authInfo = {
    createUser,
    popupGoogle,
    user,
    setUser,
    loder,
    logoutUser,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
