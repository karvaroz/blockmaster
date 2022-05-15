import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { fileUpload } from "../../helpers/fileUpload";
import { useForm } from "../../Hooks/useForm";
import { addUser, deleteUser, getUsers } from "../../Redux/actions/crudActions";
import UserUpdate from "./UserUpdate";

import "./CrudStyle.css";

const Users = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const [values, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    image: "",
  });

  const { name, email } = values;

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        values.image = response;
        Swal.fire({
          title: "Subiendo Archivo",
          text: "Espere ...",
          allowOutsideClick: false,
          timer: 5000,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(values));
    reset();
  };

  const [modal, setModal] = useState(false);
  const [datos, setDatos] = useState([]);

  const handleUpdateClick = (user) => {
    setModal(true);
    setDatos(user);
    console.log(user);
  };

  return (
    <section>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-left">#</th>
            <th className="text-left">Image</th>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {users
            ? users.map((user, index) => (
                <tr key={index}>
                  <td className="text-left">{index + 1}</td>
                  <td className="text-left">
                    <img src={user.image} alt="user" width="100" />
                  </td>
                  <td className="text-left">{user.name}</td>
                  <td className="text-left">{user.email}</td>
                  <td className="text-left">
                    <button
                      className="login_btn google"
                      style={{ marginRight: "5px" }}
                      onClick={() => dispatch(deleteUser(user.name))}
                    >
                      Borrar
                    </button>
                    <button
                      className="login_btn login"
                      onClick={() => handleUpdateClick(user)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))
            : "No hay data"}
        </tbody>
      </table>

      <form className="form_crud" onSubmit={handleCreateSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          id="file"
          type="file"
          name="image"
          accept=".jpg, .jpeg, .png"
          onChange={handleUploadFile}
        />
        <button type="submit" className="login_btn login">
          Crear
        </button>
        <Link to="/movies" className="link">
          Volver
        </Link>
      </form>
      {modal === true ? <UserUpdate datos={datos} setModal={setModal} /> : ""}
    </section>
  );
};

export default Users;
