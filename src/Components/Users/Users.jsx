import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { fileUpload } from "../../helpers/fileUpload";
import { useForm } from "../../Hooks/useForm";
import { addUser, getUsers } from "../../Redux/actions/crudActions";

import "./CrudStyle.css";

const Users = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    image: "",
  });

  const { name, email, image } = values;

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
    console.log(values);
    dispatch(addUser(values));
    reset();
  };

  const { users } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  


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
                    >
                      Borrar
                    </button>
                    <button className="login_btn login">Editar</button>
                  </td>
                </tr>
              ))
            : "No hay data"
            }
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
    </section>
  );
};

export default Users;
