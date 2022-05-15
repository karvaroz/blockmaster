import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";

import { useForm } from "../../Hooks/useForm";
import { updateUser } from "../../Redux/actions/crudActions";
// import "./CrudStyle.css";

const UserUpdate = ({ datos, setModal }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [values, handleInputChange] = useForm({
    name: datos.name,
    email: datos.email,
    image: datos.image,
  });

  const { name, email, image } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(email, values));
    handleClose();
  };

  return (
    <Modal.Dialog>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} margin={50}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre"
                value={name}
                onChange={handleInputChange}
              />

              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
              />

              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                name="image"
                placeholder="Imagen"
                value={image}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button type="submit">Editar</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Modal.Dialog>
  );
};

export default UserUpdate;
