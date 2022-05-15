import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import { types } from "../types/types";
import Swal from "sweetalert2";

/* CREATE DATA USER*/

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
    dispatch(getUsers());
  };
};

export const addUserSync = (user) => {
  return {
    type: types.addUser,
    payload: user,
  };
};

/* LIST DATA USER*/

export const getUsers = () => {
  return async (dispatch) => {
    const usersCollection = await getDocs(collection(db, "users"));
    const users = [];
    usersCollection.forEach((user) => {
      users.push({
        ...user.data(),
      });
    });
    dispatch(getUsersSync(users));
  };
};

export const getUsersSync = (users) => {
  return {
    type: types.getUsers,
    payload: users,
  };
};

/* DELETE DATA USER*/

export const deleteUser = (name) => {
  return async (dispatch) => {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("name", "==", name));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docu) => {
      deleteDoc(doc(db, "users", docu.id))
        .then((resp) => {
          dispatch(deleteUserSync(name));
          Swal.fire("Bien Hecho!", "Eliminado correctamente!", "success");
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("Oops...", "Ha ocurrido un error", "error");
        });
    });
  };
};

export const deleteUserSync = (name) => {
  return {
    type: types.deleteUser,
    payload: name,
  };
};

/* UPDATE DATA USER*/

export const updateUser = (email, user) => {
  return async (dispatch) => {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", email));
    const datosQ = await getDocs(q);
    let id;
    datosQ.forEach(async (docu) => {
      id = docu.id;
    });
    const docRef = doc(db, "users", id);
    await updateDoc(docRef, user)
      .then((resp) => {
        dispatch(updateUserSync(user));
        Swal.fire("Bien Hecho!", "Actualizado correctamente!", "success");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });

    dispatch(getUsers());
  };
};

export const updateUserSync = (user) => {
  return {
    type: types.updateUser,
    payload: user,
  };
};
