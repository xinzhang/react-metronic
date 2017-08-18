import React from 'react';
import PropTypes from 'prop-types';
import CCheckBox from './CCheckBox';
import './CTable.css';

const CTable = ({ headers, data, checkBox, ...props }) => {
    let checkBoxClass = checkBox ? 'c-display' : 'c-hide';

    let headerContent = headers.map((item, index) => {
        return (
            <th className="c-center" key={ index } data-field="id" tabIndex={ index } >
                <div className="th-inner sortable both" >{ item.text }</div>
                <div className="fht-cell"></div>
            </th>
        );
    });

    let bodyContent = data.map((item, index) => {
        return (
            <tr data-index={ index } key={ index } >
                <td className={ `bs-checkbox ${ checkBoxClass }` } >
                    <CCheckBox name="btSelectItem" />
                </td>
                {
                    headers.map((headerObj, objIndex) => {                        
                        return (
                            <td key={ objIndex } className="c-center">{ item[headerObj.name] }</td>
                        );
                    })
                }
            </tr>
        );
    });

    return (
        <div className="fixed-table-container c-fixed-table-container">
            <div className="fixed-table-header c-fixed-table-header">
                <table className="table table-hover c-table-hover">
                    <thead>
                        <tr>
                            <th className={ `bs-checkbox c-bs-checkbox ${ checkBoxClass }` } data-field="state" tabIndex="0">
                                <div className="th-inner ">
                                    <CCheckBox name="btSelectAll" />
                                </div>
                                <div className="fht-cell c-fht-cell"></div>
                            </th>
                            { headerContent }
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="fixed-table-body c-fixed-table-loading">
                <table id="table-pagination" className="table table-hover c-table-hover-margin" data-toggle="table" data-height="299" data-pagination="true" data-search="true">
                    <thead>
                        <tr>
                            <th className={ `bs-checkbox c-bs-checkbox ${ checkBoxClass }` } data-field="state" tabIndex="0">
                                <div className="th-inner">
                                    <CCheckBox name="btSelectAll" />
                                </div>
                                <div className="fht-cell"></div>
                            </th>
                            { headerContent }
                        </tr>
                    </thead>
                    <tbody>
                        { bodyContent }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CTable.propTypes = {
    headers: PropTypes.array,
    data: PropTypes.array,
    checkBox: PropTypes.bool
};

export default CTable;
 