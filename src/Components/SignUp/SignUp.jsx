import React from "react";
import { useDispatch } from "react-redux";
import { startSignUpEmailPassword } from "../../Redux/actions/authActions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("The name is required")
    .min(3, "Must be 3 characters or more"),
  email: Yup.string()
    .email("Invalid email address")
    .required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(6, "Must be 6 characters or more")
    .max(20, "Must be 20 characters or less"),
  confirmPassword: Yup.string()
    .required("The password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        dispatch(
          startSignUpEmailPassword(values.email, values.password, values.name)
        );
      }}
    >
      {({  isValid }) => (
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />

          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />

          <Field
            type="password"
            name="confirmPassword"
            placeholder="Password again"
          />
          <ErrorMessage name="confirmPassword" component="div" />
          <button type="submit" disabled={!isValid}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
