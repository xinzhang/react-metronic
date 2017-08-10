import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Form from '../ui/Form';
import FormGroup from '../ui/FormGroup';
import FormLabel from '../ui/FormLabel';
import FormError from '../ui/FormError';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Alert from '../ui/Alert';

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required.';
  }

  if (!values.password) {
    errors.password = 'Password is required.';
  }

  return errors;
};

const LoginForm = ({ handleSubmit,
                     resetForm,
                     isPending,
                     hasError,
                     fields: {
                        username,
                        password,
                     },
                    }) => {

  return (
    <Form handleSubmit={ handleSubmit }>
      <Alert isVisible={ isPending }>Loading...</Alert>
      <Alert isVisible={ hasError } status="error">Invalid username and password</Alert>

      <FormGroup>
        <FormLabel>Username</FormLabel>
        <Input type="text" fieldDefinition={ username } />
        <FormError isVisible={ username.touched && username.error }>
          { username.error }
        </FormError>
      </FormGroup>

      <FormGroup>
        <FormLabel>Password</FormLabel>
        <Input type="password" fieldDefinition={ password } />
        <FormError isVisible={ password.touched && password.error }>
          { password.error }
        </FormError>
      </FormGroup>

      <FormGroup>
        <Button type="submit">
          Login
        </Button>
        <Button onClick={ resetForm } type="button" className="ml2 bg-red">
          Clear
        </Button>
      </FormGroup>
    </Form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  isPending: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'login',
  fields: [
    'username',
    'password',
  ],
  validate,
})(LoginForm);