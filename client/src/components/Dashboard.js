// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// local files
import './Dashboard.scss';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <SurveyList />
      <Link to="/surveys/new">
        <button className="huge ui circular icon button">
          <i className="plus icon"></i>
        </button>
      </Link>
    </div>
  )
};

export default Dashboard;