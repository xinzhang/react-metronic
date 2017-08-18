import React from 'react';
import DateComponent from './DateComponent';

const getDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!

    let yyyy = today.getFullYear();

    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 

    return (dd+'/'+mm+'/'+yyyy);
};

const InvestmentDate = () => {
    let title = "Investments as at";
    let value = getDate();

    return (
        <div>
            <DateComponent title={ title } value={ value } />
        </div>
    );
};
 
export default InvestmentDate;