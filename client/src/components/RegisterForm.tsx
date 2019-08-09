import React from 'react';
import { FormikProps, Form, Field, withFormik } from 'formik';

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
    return (
      <Form className="register-form">
        <Field type="name" name="name" placeholder="Name" />
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

  async handleSubmit(values, { setStatus }): Promise<void> {
    console.log('Submitted: ', values);
  },
})(RegisterForm);

export default FormikRegisterForm;
