import React, {Component} from 'react';
import { connect } from 'react-redux';
import _, {debounce} from 'lodash';
import Autosuggest from 'react-autosuggest';

import CInput from '../../../components/ui/CInput';
import CButton from '../../../components/ui/CButton';
import './EpdsPage.css';

import {searchEPDS, getEPDSDoc} from '../../../actions/epdsAction';

const mapStateToProps = (state) => {
    console.log(state);
    return {        
        epdsList: state.epdsState.epdsList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (obj) => {
            dispatch(searchEPDS(obj))
        },
        onGetDoc: (obj) => {
            dispatch(getEPDSDoc(obj))
        }
    }
};

class EpdsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {      
      value:'',
      epdsList:[]
    }
  }

  handleSearch = (event)=> {
      console.log(event.target.value);
      this.setState({value: event.target.value}, () => {
        this.doSearch();
      })
  }  

  doSearch = debounce( () => {
      let filterStr = this.state.value;      
      this.props.onSearch(filterStr);      
  }, 300);

  handleGetDoc = (event) => {
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      epdsList: this.props.epdsList
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      value:'',
      epdsList: []
    });
  };

  getSuggestionValue(item) {
    return item.APIRCode;
  }

  renderSuggestion(item) {
    return (
        <span>{item.APIRCode} - {item.FundName}</span>
   );
  }

  render() {
    const { value, epdsList } = this.state;
    const inputProps = {
      placeholder: "Type 'something'",
      value,
      onChange: this.handleSearch
    };

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
                name="epds" size="50"
                suggestions={epdsList}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps} />
            />
            
            <CButton className="green" onClick={this.handleGetDoc}>Get ePDS</CButton>
          </div>    
        </div>
    )
  }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EpdsPage);
