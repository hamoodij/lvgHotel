import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {

  onBookingClick(event) {
    event.preventDefault();

    Meteor.call('bookings.insert', (error, bookingId) => {
      browserHistory.push(`/bookings/${bookingId}`);
    });
  }

  render() {
    return (
        <nav className="nav navbar-default">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" >LVG Hotel Management</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Accounts />
            </li>
            <li>
              <a href="#" onClick={this.onBookingClick.bind(this)}>Create Booking</a>
            </li>
          </ul>
        </nav>
    );
  }
};

export default Header;
