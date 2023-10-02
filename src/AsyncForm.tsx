import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './form.css'

const isEmailAvailable = async (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const availableEmails = ['test@example.com', 'test2@example.com'];
      if (availableEmails.includes(email)) {
        resolve('Email is already in use');
      } else {
        resolve(undefined); 
      }
    }, 1000);
  });
};

const AsyncForm = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={async (values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else {
          const errorMessage = await isEmailAvailable(values.email);
          if (errorMessage) {
            errors.email = errorMessage;
          }
        }
        return errors;
      }}
    >
      <Form>
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className='error'/>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AsyncForm;
