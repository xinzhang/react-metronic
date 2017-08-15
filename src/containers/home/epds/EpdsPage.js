import React from 'react';
import './EpdsPage.css';

const EpdsPage = () => (
  <div className="c-epds-layout">
    <span className="c-epds-title"><strong>Enter Product APIR Code or Fund Name:</strong>  *(Minimum 3 characters) </span>
    <div>
      <input type="text" placeholder="APIR Code or Fund Name" />
      <input type="button" value="Get ePDS" />  
    </div>    
  </div>
)

export default EpdsPage;