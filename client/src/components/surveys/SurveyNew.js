// dependencies
import React from 'react';
import { reduxForm } from 'redux-form';
// local files
import './SurveyNew.scss';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

// SurveyNew shows SurveyForm and SurveyFormReview!
class SurveyNew extends React.Component {
  // state
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview onButtonBack={() => this.setState({ showFormReview: false })} />
    } else {
      return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
    }
  }

  render() {
    return (
      <div className="SurveyNew">
        {this.renderContent()}
      </div>
    );
  };
};

export default reduxForm({
  form: "surveyForm"
})(SurveyNew);