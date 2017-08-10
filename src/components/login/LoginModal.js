import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../ui/Modal';
import ModalContent from '../ui/ModalContent';
import LoginForm from './LoginForm';

const LoginModal = ({ isVisible, isPending, hasError, onSubmit }) => {
  return (
    <Modal testid="login-form" isVisible={ isVisible }>
      <ModalContent>
        <h1 className="mr2 mr12">Login</h1>

        <LoginForm
          isPending={ isPending }
          hasError={ hasError }
          onSubmit={ onSubmit } />
      </ModalContent>
    </Modal>
  );
}

LoginModal.propTypes = {
    isVisible: PropTypes.bool,
    isPending: PropTypes.bool,
    hasError: PropTypes.bool,
    onSubmit: PropTypes.func,
};

export default LoginModal;