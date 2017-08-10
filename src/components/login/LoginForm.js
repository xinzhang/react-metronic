import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Form from '../ui/Form';
//import FormGroup from '../ui/FormGroup';
//import FormLabel from '../ui/FormLabel';
//import FormError from '../ui/FormError';
//import Input from '../ui/Input';
//import Button from '../ui/Button';
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

/*
const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}
*/

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const LoginForm = (props) => {
  const { 
          onSubmit, 
          //resetForm, 
          isPending,
          hasError, 
          submitting, 
          pristine,
        } = props;

  return (  
    <Form handleSubmit={ onSubmit }>
      <Alert isVisible={ isPending }>Loading1...</Alert>
      <Alert isVisible={ hasError } status="error">Invalid username and password</Alert>

      <Field name="username" type="text" component={ renderField } label="Username"/>
      <Field name="password" type="password" component={ renderField } label="Password"/>
      <div>
        <button type="submit" disabled={ submitting }>Login</button>
        <button type="button" disabled={ pristine || submitting } >Clear</button>
      </div>
    </Form>
  ); 
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  //resetForm: PropTypes.func.isRequired,
  //isPending: PropTypes.bool.isRequired,
  //hasError: PropTypes.bool.isRequired,
  //fields: PropTypes.object.isRequired,
};

/*
export default reduxForm({
  form: 'login',
  fields: {
    'username',
    'password',
  },
  validate,
})(LoginForm);
*/
export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);