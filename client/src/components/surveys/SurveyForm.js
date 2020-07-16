// SurveyForm shows a form for user to add input (initial load)
// dependencies
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
// local files
import './SurveyForm.scss';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

// Validation
function validate(values) {
  const errors = {};
  const msg = "You must provide a value!";

  errors.recipients = validateEmails(values.recipients || "");
  
  if (!values.title) {
    errors.title = msg;
  }
  if (!values.subject) {
    errors.subject = msg;
  }
  if (!values.body) {
    errors.body = msg;
  }
  if (!values.emails) {
    errors.emails = msg;
  }

  return errors;
};

// SurveyForm shows a form for a user to add input
class SurveyForm extends React.Component {
  // helper function
  renderFields() {
    return formFields.map(({ name, label, placeholder }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          placeholder={placeholder}
        />
      );
    });
  };

  render() {
    return (
      <div className="SurveyForm">
        <form className="ui form" onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <div className="field">
            {this.renderFields()}
          </div>

          <Link to="/surveys">
            <button className="ui left floated red button" type="button">Cancel</button>
          </Link>
          <button className="ui right floated primary button" type="submit">Next <i className="check icon"></i></button>
        </form>
      </div>
    );
  };
};

export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);