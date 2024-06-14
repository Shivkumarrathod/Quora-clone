import { initializeApp } from 'firebase/app'
import {getDoc, doc, getFirestore, setDoc} from 'firebase/firestore'
import { getAuth ,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
} from 'firebase/auth';
import { createContext ,useContext, useEffect, useState } from 'react'
import {getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage'


const FirebaseContext = createContext(null)
export const useFirebase = ()=> useContext(FirebaseContext)

const firebaseConfig = {
    apiKey: "AIzaSyAuTgk6WJ-Jo-h6d01xYWeqa-Xmlrvyd1g",
    authDomain: "quora-clone-ecfd0.firebaseapp.com",
    projectId: "quora-clone-ecfd0",
    storageBucket: "quora-clone-ecfd0.appspot.com",
    messagingSenderId: "117811209596",
    appId: "1:117811209596:web:930dda5b1fa87777f9f0f9",
};

const firebaseApp = initializeApp(firebaseConfig) 
export const firebaseAuth = getAuth(firebaseApp)
const user = firebaseAuth.currentUser;
const  googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const firebaseStorage = getStorage(firebaseApp)
const firebaseFirestore = getFirestore(firebaseApp)

export const FirebaseProvider =(props)=>{
    const [user ,setUSer] = useState('')
    const [uploadImage,setUploadImage]= useState('')

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth ,(user)=>{
            if(user){
                setUSer(user)
            }else{
                setUSer('')
            }
        })
    },[user,onAuthStateChanged])

    let isLoggedIn = user ? true:false;

    const createUserWithEmailAndPasswordHandler = async(email ,password)=>{
      try {
        const userCredetial =await createUserWithEmailAndPassword(firebaseAuth,email,password)
        const user = userCredetial.user
        await setDoc(doc(firebaseFirestore,'users',user.uid),{
            uid:user.uid,
            email:user.email,
            displayName:user.displayName?user.displayName:'',
            photoURL:user.photoURL?user.photoURL:"",
            createdAt:new Date()
        })
      } catch (error) {
         console.log(error);
      }
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
    const signInWithGoogle =async()=>{
       try {
        const userCredential=await signInWithPopup(firebaseAuth,googleProvider)
        const user = userCredential.user

        const userDocRef = doc(firebaseFirestore,'users',user.uid)
        const userDocSnap = await getDoc(userDocRef)

        if (!userDocSnap.exists()) {
            await setDoc(doc(firebaseFirestore,'users',user.uid),{
                uid:user.uid,
                email:user.email,
                displayName:user.displayName?user.displayName:'',
                photoURL:user.photoURL?user.photoURL:"",
                createdAt:new Date()
            }) 
        }
       } catch (error) {
        console.log(error);
       } 
    }

    const signInWithGithub =async()=>{
        try {
            const userCredential=await signInWithPopup(firebaseAuth,githubProvider)
            const user = userCredential.user
    
            const userDocRef = doc(firebaseFirestore,'users',user.uid)
            const userDocSnap = await getDoc(userDocRef)
    
            if (!userDocSnap.exists()) {
                await setDoc(doc(firebaseFirestore,'users',user.uid),{
                    uid:user.uid,
                    email:user.email,
                    displayName:user.displayName?user.displayName:'',
                    photoURL:user.photoURL?user.photoURL:"",
                    createdAt:new Date()
                }) 
            }
           } catch (error) {
            console.log(error);
           } 
    }

    const uploadingImagePost=async(uid,image)=>{
       const imageRef= ref(firebaseStorage,`uploads/image/${uid}-${image.name}`)
       const uploadResult= await uploadBytes(imageRef,image)
       return (uploadResult.ref.fullPath)
    }
    const GetUserById = async(uid)=>{
        try {
           const userDoc= await getDoc(doc(firebaseFirestore,'users',uid)) 
           return userDoc
          } catch (error) {
            console.log(error);
          }
    }
    const getImage = async(imgUrl)=>{
        try {
            const imageRef = ref(firebaseStorage,imgUrl)
            const url = await getDownloadURL(imageRef)
            return url
        } catch (error) {
            console.log(error.message);
        }
    }
    return <FirebaseContext.Provider value={{
        createUserWithEmailAndPasswordHandler,
        signInUser,
        isLoggedIn,
        signOut,
        signInWithGoogle,
        signInWithGithub,
        user,
        uploadingImagePost,
        uploadImage,
        GetUserById,
        getImage
    }}>
        {props.children}
    </FirebaseContext.Provider>
}