import React, {Component} from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';

import FileSaver from 'file-saver';

import CButton from '../../../components/ui/CButton';
import './EpdsPage.css';

import { searchEPDS, getEPDSDoc, updateEPDSSearchValue, clearEPDSList } from '../../../actions/epdsAction';

const mapStateToProps = (state) => {

    const {value, epdsList, isPending, epdsDocData} = state.epdsState;
    return {
        value,
        epdsList,
        isPending,
        epdsDocData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //search
        onChange(event, {newValue}) {
          dispatch(updateEPDSSearchValue(newValue));
        },
        onSuggestionsFetchRequested({ value }) {
              dispatch(searchEPDS(value));
        },
        onSuggestionsClearRequested() {
          dispatch(clearEPDSList());
        },
        //get doc
        onGetDoc: (obj) => {
            dispatch(getEPDSDoc(obj))
        }
    }
};

function getSuggestionValue(item) {
  return item.APIRCode;
}

function renderSuggestion(item) {
  return (
      <span>{item.APIRCode} - {item.FundName}</span>
 );
}

class EpdsPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleGetDoc = () => {
    this.props.onGetDoc(this.props.value);
  }

  componentWillReceiveProps(nextProps, nextContext) {

    if (nextProps.epdsDocData != null && nextProps.epdsDocData !== this.props.epdsDocData) {
      //const data = new Blob([nextProps.epdsDocData]);
      FileSaver.saveAs(nextProps.epdsDocData, this.props.value + ".pdf");
    }
  }

  render() {
        const { value, epdsList, isPending, 
                onChange, onSuggestionsFetchRequested, onSuggestionsClearRequested } = this.props;
    const inputProps = {
      placeholder: "Enter apir code or fund name",
      value,
            onChange,
    };

    const status = (isPending ? (<img className="c-epds-icon" src="/assets/images/spinner.gif" />) : '');

    return(
      <div className="c-epds-layout">
          <span className="c-epds-title"><strong>Enter Product APIR Code or Fund Name:</strong>  *(Minimum 3 characters) </span>
          <div className="c-epds-body form-group">
            {/*
            <CInput type="text" name="epds" size="50"
                placeholder="Insert APIR Code or Fund Name"
                value={this.state.filterStr}
                onChange={this.handleSearch} />
            */}

            <Autosuggest
                        name="epds" 
                        size="50"
                        height="50"
                suggestions={epdsList}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />

            <CButton className="green c-epds-btn" onClick={this.handleGetDoc}>Get ePDS</CButton>
                    <div className="c-epds-spinner">{ status }</div>
          </div>
        </div>
        );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EpdsPage);
