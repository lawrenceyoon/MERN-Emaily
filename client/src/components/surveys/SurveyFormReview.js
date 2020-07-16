// SurveyFormReview shows summary of SurveyForm and is review process
// dependencies
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// local files
import './SurveyFormReview.scss';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = (props) => {
  const reviewFields = formFields.map((field) => {
    return (
      <div key={field.name}>
        <div className="ui tag label">{field.label}</div>
        <div className="form-input">{props.formValues[field.name]}</div>
      </div>
    );
  });

  return (
    <div className="SurveyFormReview">
      <h5>Please confirm your entries!</h5>
      {reviewFields}
      <button
        className="ui yellow button"
        onClick={props.onButtonBack}
      >
        Back
      </button>
      <button
        className="ui right floated primary button"
        onClick={() => props.submitSurvey(props.formValues, props.history)}
      >
        Send Survey 
        <i className="envelope outline icon"></i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));