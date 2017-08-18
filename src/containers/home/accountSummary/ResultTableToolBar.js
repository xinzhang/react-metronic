
import React from 'react';
import CInput from '../../../components/ui/CInput';

const ResultTableToolBar = ({ ...props }) => {

  return (
    <div className="bootstrap-table">
        <div className="fixed-table-toolbar">
            <div className="pull-right search">
                <CInput className="form-control" type="text" size="30" placeholder="Filter" />
            </div>
        </div>
    </div>
  );
};

ResultTableToolBar.propTypes = {
};

export default ResultTableToolBar;


