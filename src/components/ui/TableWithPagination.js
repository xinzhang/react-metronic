import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CTable from './CTable';
import CPagination from './CPagination';

class TableWithPagination extends Component {
    // here is the container of the table and pagination tool bar
    // it will decide the function between table and pagination 
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            totalPage: 1,
            itemsPerPage: 2,  // 8,
            shownPageNum: 5,
            pagedArray: [],
        };

        this.pagination = this.pagination.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {   
        let itemsPerPage = nextProps.itemsPerPage || this.state.itemsPerPage;
        let calculatedNum = parseInt(nextProps.data.length / itemsPerPage, 10);
        let totalPage = nextProps.data.length % itemsPerPage === 0 ? calculatedNum : calculatedNum + 1;

        this.setState({
            currentPage: 1,
            totalPage,
            itemsPerPage,
            pagedArray: nextProps.data.slice(0, itemsPerPage),
        });
    }

    pagination(pageNo) {
        let itemsPerPage = this.state.itemsPerPage;
        let pagedArray = this.props.data.slice((pageNo-1) * itemsPerPage, pageNo * itemsPerPage);

        this.setState({
            currentPage: pageNo,
            pagedArray,
        });
    }

    render() {
        return (
            <div>
                <CTable headers={ this.props.headers } data={ this.state.pagedArray }  checkBox={ this.props.checkBox } />
                <CPagination currentPage={ this.state.currentPage } totalPage={ this.state.totalPage } shownPageNum={ this.state.shownPageNum } pageNavigation={ this.pagination } />
            </div>
        );
    }
};

TableWithPagination.propTypes = {
    headers: PropTypes.array,
    data: PropTypes.array,
    checkBox: PropTypes.bool,
};

export default TableWithPagination;
                    