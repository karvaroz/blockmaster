import { types } from "../types/types";
import { facebook, google } from "../../Firebase/FirebaseConfig";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";


// Async Login with email and password

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        Swal.fire("Bien Hecho!", "Inicio de sesión exitoso", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
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
       Swal.fire("Bien Hecho!", "Inicio de sesión con google exitoso", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
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
        Swal.fire("Bien Hecho!", "Inicio de sesión con facebook exitoso", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
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
        Swal.fire("Bien Hecho!", "Registro exitoso", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
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
        Swal.fire("Bien Hecho!", "Cerraste sesión", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
  };
};

export const logout = () => ({
  type: types.logout,
});
