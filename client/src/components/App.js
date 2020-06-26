// dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// local files
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2 className="Dashboard">Dashboard</h2>;
const SurveyNew = () => <h2 className="SurveyNew">SurveyNew</h2>;

class App extends React.Component {

  // call our action creator
  componentDidMount() {
    this.props.fetchUser();
  };

  render() {
    return (
      <div className="App ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default connect(null, actions)(App);
