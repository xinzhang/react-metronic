import React from 'react';
import './TitleBar.css';

const TitleBar = ({ children }) => {

  return (
    <div className="c-title-bar-container caption-subject font-green sbold uppercase">
      { children }
    </div>
  );
};
 
export default TitleBar;