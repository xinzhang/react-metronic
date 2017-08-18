import React from 'react';
import CInput from '../../../components/ui/CInput';
import CButton from '../../../components/ui/CButton';
import './EpdsPage.css';

const EpdsPage = () => (
  <div className="c-epds-layout">
    <span className="c-epds-title"><strong>Enter Product APIR Code or Fund Name:</strong>  *(Minimum 3 characters) </span>
    <div className="c-epds-body form-group">
      <CInput type="text" name="epds" size="50" placeholder="Insert APIR Code or Fund Name" />
      <CButton className="green">Get ePDS</CButton>
    </div>    
  </div>
)

export default EpdsPage;