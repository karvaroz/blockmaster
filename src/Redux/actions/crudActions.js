import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import { types } from "../types/types";
import Swal from "sweetalert2";

/* CREATE DATA  USER*/

export const addUser = (user) => {
  return (dispatch) => {
    addDoc(collection(db, "users"), user)
      .then((resp) => {
        dispatch(addUserSync(user));
        Swal.fire("Bien Hecho!", "Creado correctamente!", "success");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
  };
};

export const addUserSync = (user) => {
  return {
    type: types.addUser,
    payload: user,
  };
};

/* LIST DATA  USER*/

export const getUsers = () => {
  return async (dispatch) => {
    const usersCollection = await getDocs(collection(db, "users"));
    const users = [];
    usersCollection.forEach((user) => {
      users.push({
        ...user.data(),
      });
    });
    console.log(users);
    dispatch(getUsersSync(users));
  };
};

export const getUsersSync = (users) => {
  return {
    type: types.getUsers,
    payload: users,
  };
};
