import React from "react";
import { useDispatch } from "react-redux";
// import { useForm } from "../../Hooks/useForm";
import {
  startFacebookLogin,
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../Redux/actions/authActions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(6, "Must be 6 characters or more")
    .max(20, "Must be 20 characters or less"),
});

const Login = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        dispatch(startLoginEmailPassword(values.email, values.password));
      }}
    >
      {({ isValid }) => (
        <Form>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={!isValid}>
            Login
          </button>
          <button type="submit" onClick={() => dispatch(startGoogleLogin())}>
            Sign up with Google
          </button>
          <button type="submit" onClick={() => dispatch(startFacebookLogin())}>
            Sign up with Facebook
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
