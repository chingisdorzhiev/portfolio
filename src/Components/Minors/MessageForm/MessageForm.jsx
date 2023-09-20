import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./FormStyles.module.css";
import emailjs, { send } from "@emailjs/browser";
import loadingImg from "./../../../Images/loading.png";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validateName(value) {
  let error;
  if (!value) {
    error = "Field is required";
  }
  return error;
}

function validateMessage(value) {
  let error;
  if (!value) {
    error = "Field is required";
  }
  return error;
}

function MessageForm(props) {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (values, setSubmitting, resetForm) => {
    emailjs
      .send("service_7gm6nad", "template_63om2r7", values, "gfpVMVAAfNpbTUtR-")
      .then(
        (result) => {
          setSuccess(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
  };

  const darkStyles = props.darkTheme ? styles.darkTheme : styles.lightTheme;

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        sendEmail(values, setSubmitting, resetForm);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form ref={formRef} className={`${styles.form} ${darkStyles}`}>
          NAME
          <Field
            className={`${styles.field} ${
              errors.name && touched.name && styles.errorField
            }`}
            type="text"
            name="name"
            validate={validateName}
            disabled={isSubmitting}
          />
          {errors.name && touched.name && (
            <div className={styles.error}>{errors.name}</div>
          )}
          EMAIL
          <Field
            className={`${styles.field} ${
              errors.email && touched.email && styles.errorField
            }`}
            type="email"
            name="email"
            validate={validateEmail}
            disabled={isSubmitting}
          />
          {errors.email && touched.email && (
            <div className={styles.error}>{errors.email}</div>
          )}
          MESSAGE
          <Field
            as="textarea"
            placeholder="Type your message"
            className={`${styles.field} ${styles.messageField} ${
              errors.message && touched.message && styles.errorField
            }`}
            name="message"
            validate={validateMessage}
            disabled={isSubmitting}
          />
          {errors.message && touched.message && (
            <div className={styles.error}>{errors.message}</div>
          )}
          <button
            className={`${styles.submitBtn} ${styles[props.btncolor]} ${
              isSubmitting ? styles.submiting : ""
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <img src={loadingImg} /> : "Send"}
          </button>
          {success ? <p>Your message has been sent successfully!</p> : ""}
        </Form>
      )}
    </Formik>
  );
}

export default MessageForm;
