import { initializeApp } from 'firebase/app'
import { getAuth ,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
} from 'firebase/auth';
import { createContext ,useContext, useEffect, useState } from 'react'

const FirebaseContext = createContext(null)
export const useFirebase = ()=> useContext(FirebaseContext)

const firebaseConfig = {
    apiKey: "AIzaSyAuTgk6WJ-Jo-h6d01xYWeqa-Xmlrvyd1g",
    authDomain: "quora-clone-ecfd0.firebaseapp.com",
    projectId: "quora-clone-ecfd0",
    storageBucket: "quora-clone-ecfd0.appspot.com",
    messagingSenderId: "117811209596",
    appId: "1:117811209596:web:930dda5b1fa87777f9f0f9"
};

const firebaseApp = initializeApp(firebaseConfig) 
const firebaseAuth = getAuth(firebaseApp)
const user = firebaseAuth.currentUser;
const  googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const FirebaseProvider =(props)=>{
    const [user ,setUSer] = useState(false)

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth ,(user)=>{
            if(user){
                setUSer(true)
            }else{
                setUSer(false)
            }
        })
    },[user,onAuthStateChanged])

    let isLoggedIn = user ? true:false;

    const createUserWithEmailAndPasswordHandler = (email ,password)=>{
      return  createUserWithEmailAndPassword(firebaseAuth,email,password)
    }
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(firebaseAuth ,email ,password)
    }
    const signOut = ()=>{
        return firebaseAuth.signOut()
         .then(()=>{
            console.log("user log Out");
         }).catch((error)=>console.log(error))
    }
    const signInWithGoogle =()=>{
       return signInWithPopup(firebaseAuth,googleProvider)
    }

    const signInWithGithub =()=>{
        return signInWithPopup(firebaseAuth,githubProvider)
    }
    return <FirebaseContext.Provider value={{createUserWithEmailAndPasswordHandler,
        signInUser,
        isLoggedIn,
        signOut,
        signInWithGoogle,
        signInWithGithub,
    }}>
        {props.children}
    </FirebaseContext.Provider>
}