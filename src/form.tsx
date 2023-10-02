import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './form.css'

const ForgetPassword = () => {
  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div>
      <h2>Forget Password</h2>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validate={validateForm}
        onSubmit={(values) => {
          // Handle form submission
          console.log(values);
        }}
      >
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className='error' />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className='error'/>
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className='error' />
          </div>

          <button type="submit">Reset Password</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ForgetPassword;
