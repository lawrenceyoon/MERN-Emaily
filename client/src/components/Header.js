// dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
// local files
import './Header.scss';
import Payments from './Payments';

class Header extends React.Component {
  // user is one of 3 cases: null, false, loggedin
  renderContent() {
    switch (this.props.auth) {
      case null:
        return ;
      case false:
        return (
          <li><a href="/auth/google" className="item">Login With Google</a></li>
        );
      default:
        return (
          [
            <li key="1"><Payments /></li>,
            <li className="credits" key="2">Credits: {this.props.auth.credits}</li>,
            <li key="3"><a href="/api/logout" className="item">Logout</a></li>
          ]
        );
    }
  };

  render() {
    return (
      <nav className="Header">
        <div className="ui secondary menu">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="item logo"
          >
            Emaily
          </Link>
          <div className="right menu">
            <ul>
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    );
  };
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Header);
