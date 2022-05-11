import { types } from "../types/types";
import { facebook, google } from "../../Firebase/FirebaseConfig";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

// Async Login with email and password
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        alert("Login Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

// Login with google
export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        alert("Usuario creado correctamente");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Login with facebook
export const startFacebookLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        alert("Usuario creado correctamente");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Sign up with email and password
export const startSignUpEmailPassword = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, name)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name });
        dispatch(signUp(user.uid, user.displayName, user.email, user.password));
        alert("Usuario creado correctamente");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const signUp = (uid, displayName, email, password) => ({
  type: types.signup,
  payload: {
    uid,
    displayName,
    email,
    password,
  },
});

// Logout
export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await auth
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const logout = () => ({
  type: types.logout,
});
