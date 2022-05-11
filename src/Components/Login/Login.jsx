import React from "react";
import { useDispatch } from "react-redux";
import {
  startFacebookLogin,
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../Redux/actions/authActions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./LoginStyle.css"
import { Link } from "react-router-dom";

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
    <>
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
          <Form className="login_form">
            <img src="./images/logo-blockBuster.png" alt="logo" />
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="span" className="error" />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="span" className="error" />
            <button
              className="login_btn login"
              type="submit"
              disabled={!isValid}
            >
              Login
            </button>
            <button
              className="login_btn google"
              type="submit"
              onClick={() => dispatch(startGoogleLogin())}
            >
              Sign up with Google
            </button>
            <button
              className="login_btn facebook"
              type="submit"
              onClick={() => dispatch(startFacebookLogin())}
            >
              Sign up with Facebook
            </button>
            <Link to="/signup" className="link">Don't have an account?</Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
