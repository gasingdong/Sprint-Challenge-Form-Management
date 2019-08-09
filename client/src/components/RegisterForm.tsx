import React from 'react';
import { FormikProps, Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

interface RegisterValues {
  name: string;
  password: string;
}

interface RegisterProps {
  initialName?: string;
  initialPassword?: string;
}

class RegisterForm extends React.Component<FormikProps<RegisterValues>, {}> {
  public render(): React.ReactElement {
    const { touched, errors } = this.props;
    return (
      <Form className="register-form">
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field type="name" name="name" placeholder="Name" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
        <button type="submit">Register</button>
      </Form>
    );
  }
}

const FormikRegisterForm = withFormik<RegisterProps, RegisterValues>({
  mapPropsToValues({
    initialName,
    initialPassword,
  }: RegisterProps): RegisterValues {
    return {
      name: initialName || '',
      password: initialPassword || '',
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please enter a name'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Please enter a password'),
  }),

  async handleSubmit(values, { setStatus }): Promise<void> {
    console.log('Submitted: ', values);
  },
})(RegisterForm);

export default FormikRegisterForm;
