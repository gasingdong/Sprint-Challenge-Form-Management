import React from 'react';
import { FormikProps, Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Recipe } from '../App';

interface RegisterProps {
  initialUsername?: string;
  initialPassword?: string;
  setRecipes: (recipes: Recipe[]) => void;
}

interface RegisterValues {
  username: string;
  password: string;
}

interface OtherProps {
  setRecipes: (recipes: Recipe[]) => void;
}

class RegisterForm extends React.Component<
  OtherProps & FormikProps<RegisterValues>,
  {}
> {
  public async componentDidUpdate(): Promise<void> {
    if (this.props.status) {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/restricted/data'
        );
        this.props.setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  }

  public render(): React.ReactElement {
    const { touched, errors } = this.props;
    return (
      <Form className="register-form">
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="username" name="username" placeholder="Username" />
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
    initialUsername,
    initialPassword,
  }: RegisterProps): RegisterValues {
    return {
      username: initialUsername || '',
      password: initialPassword || '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter a username'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Please enter a password'),
  }),

  async handleSubmit(values, { setStatus }): Promise<void> {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/register',
        values
      );
      setStatus(response.data);
    } catch (err) {
      console.log(err);
    }
  },
})(RegisterForm);

export default FormikRegisterForm;
