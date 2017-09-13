import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import './FundAutoSuggestion.css';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(items, value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return items.filter(x => regex.test(x.fundName) || regex.test(x.fundCode));
}

function getSuggestionValue(suggestion) {
  return suggestion.fundCode + " " + suggestion.fundName;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.fundCode} {suggestion.fundName}</span>
  );
}

class FundAutoSuggestion extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: '',
      suggestions: []
    };

  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(this.props.data, value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render(){
    const { value, suggestions } = this.state;
        const inputProps = {
          placeholder: "",
          value,
          onChange: this.onChange
        };

        return (
          <Autosuggest
            {...this.props}
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} />
        );
  }

}

FundAutoSuggestion.propTypes = {
  data: PropTypes.array.isRequired
}

FundAutoSuggestion.defaultProps = {
  data:[]
}

export default FundAutoSuggestion;
