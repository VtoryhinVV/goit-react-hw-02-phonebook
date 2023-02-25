import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';

let initialValues = { name: '', number: '' };

let userSchema = object({
  name: string().required(),
  number: string().min(6, 'Minimum 6 symbols').required(),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name"></Field>
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          Number
          <Field name="number"></Field>
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
