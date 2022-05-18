// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from 'firebase/auth';
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { typography } from "@mui/system";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, 'users'), where("uid", '==', user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await (addDoc(collection(db, 'users'), {
                uid: user.uid,
                authProvider: 'google',
                email: user.email
            }));
        }
    } catch (err) {
        console.error(err);
    }
}

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            authProvider: 'local',
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert('Password reset link sent!');
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}

const logout = () => {
    signOut(auth);
}

const fetchDrawStats = async (huntCode) => {
    try {
        console.log(huntCode);
        await getFirestore(app)
        return;
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}




export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    fetchDrawStats
  };