import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';

const BookingForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    bookingDate: Yup.date().required('Required'),
    comment: Yup.string()
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form values:', values);
    alert('Booking submitted!');
    resetForm();
  };

  return (
    <div className={css.formbox}>
    <p className={css.title}>Book your campervan now</p>
    <p className={css.text}>Stay connected! We are always ready to help you.</p>
    <div>
  
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formWrapper} >
          <Field className={css.field} name="name" type="text" placeholder="Name*"/>
          <ErrorMessage name="name" component="div" className={css.error} />

          <Field className={css.field} name="email" type="email" placeholder="Email*"/>
          <ErrorMessage name="email" component="div" className={css.error} />

          <Field className={css.field} name="bookingDate" type="date" placeholder="Booking Date*"/>
          <ErrorMessage name="bookingDate" component="div" className={css.error} />

          <Field className={css.field} as="textarea" name="comment" as="textarea" placeholder="Comment" />
          <ErrorMessage name="comment" component="div" className={css.error} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    </div>
  );
};

export default BookingForm;
