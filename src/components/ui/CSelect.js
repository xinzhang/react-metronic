import React from 'react';
import PropTypes from 'prop-types';
import './CSelect.css';

const CSelect = ({ dataArr, name, value, size=200, ...props }) => {
    // let liClass = "", ariaSelected = false;
    // let defaultText = defaultValue;

    // let liContent = dataArr.map((item, index) => {
    //     liClass = "";
    //     ariaSelected = false;
    //     if (item.value === defaultValue) {
    //         defaultText = item.text;
    //         liClass = "selected";
    //         ariaSelected = true;
    //     }
        
    //     return (
    //         <li data-original-index={ index } key={ index } className={ liClass }>
    //             <a tabIndex="0" data-tokens="null" role="option" aria-disabled="false" aria-selected={ ariaSelected }>
    //                 <span className="text">{ item.text }</span>
    //                 <span className="fa fa-check check-mark"></span>
    //             </a>
    //         </li>
    //     );
    // });

    let optionContent = dataArr.map((item, index) => {      
        return <option key={ index } value={ item.value } >{ item.text }</option>;
    });

    return (
        // <div className="btn-group bootstrap-select bs-select form-control" style={{ width: size }}>
        //     <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title={ defaultText } aria-expanded="false">
        //         <span className="filter-option pull-left">{ defaultText }</span>&nbsp;
        //         <span className="bs-caret">
        //             <span className="caret"></span>
        //         </span>
        //     </button>
        //     <div className="dropdown-menu open c-dropdown-menu-open " >
        //         <ul className="dropdown-menu inner c-dropdown-menu-inner" role="listbox" aria-expanded="false">
        //             { liContent }
        //         </ul>
        //     </div>
        //     <select className="bs-select form-control" tabIndex="-98" onChange={ props.onChange } >
        //         { optionContent }
        //     </select>
        // </div>
        <div>
            <select className="bs-select form-control" style={{ width: size }} name={ name } value={ value } onChange={ props.onChange } >
                { optionContent }
            </select>
        </div>
    );
};

CSelect.propTypes = {
    dataArr: PropTypes.array,
    defaultValue: PropTypes.string,
    size: PropTypes.number,
};

export default CSelect;

