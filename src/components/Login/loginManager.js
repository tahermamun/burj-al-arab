import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.fonfig';

export const firebaseInitializeConfig = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
}

export const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            console.log(signedInUser)
            return signedInUser


        }).catch((error) => {

            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });

}