// dependencies
import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
// local files
import './SurveyList.scss';

class surveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  };

  // helper method
  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className="ui card">
          <div className="content">
            <div className="center aligned header">{survey.title}</div>
            <div className="center aligned description">
              <span>{survey.body}</span>
            </div>
            <div className="center aligned description">
              <span className="choice-yes">Yes: {survey.yes}</span> <span className="choice-no">No: {survey.no}</span>
            </div>
          </div>

          <div className="extra content">
            <div className="center aligned author">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </div>
          </div>
      
        </div>
      );
    });
  };

  render() {
    return (
      <div className="surveyList">
        <p>New</p>
        {this.renderSurveys()}
        <p>Old</p>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { surveys: state.surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(surveyList);