import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children, isVisible }) => {
  return (
    <main>
      { isVisible ? children : null }
    </main>
  );
};

Content.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
};

export default Content;