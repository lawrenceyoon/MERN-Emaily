// dependencies
import React from 'react';
// local files
import './SurveyField.scss';

// SurveyField contains logic to render a single label and text input
const SurveyField = (props) => {
  return (
    <div className="SurveyField">
      <label>{props.label} </label>
      <div className="ui input">
        <input className="ui input" {...props.input} placeholder={props.placeholder} />
      </div>
      <span className="validate-msg">{props.meta.touched && props.meta.error}</span>
    </div>
  );
};

export default SurveyField;