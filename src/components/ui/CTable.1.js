import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CCheckBox from './CCheckBox';
import CButton from './CButton';
import './CTable.css';

import $ from 'jquery';

class CTable extends Component {


//const CTable = ({ headers, data, checkBox, action=false, ...props }) => {
    let checkBoxClass = checkBox ? 'c-display' : 'c-hide';
    let actionHeaderTh = (action) => {
        if (action) 
            return (<th className="c-center"><div className="th-inner">Action</div><div className="fht-cell"></div></th>);
    };
    let actionHeaderTd = (action) => {
        if (action) 
            return (<td className="c-center"><CButton className="outline white"><i className="fa fa-edit" title="Edit" /></CButton><CButton className="outline white"><i className="fa fa-trash" title="Delete" /></CButton></td>);
    };
    let tableHeaderClass = (action) ? 'c-fixed-table-header-noaction' : 'c-fixed-table-header-noaction';

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
                {
                    actionHeaderTd(action)
                }
            </tr>
        );
    });

    componentDidMount() {       
        $('[data-toggle="table"]').bootstrapTable();
    }

    return (
        <div className="fixed-table-container c-fixed-table-container">
            <div className={ `fixed-table-header c-fixed-table-header ${ tableHeaderClass }` }>
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
                            
                            {
                                actionHeaderTh(action)
                            }
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
 