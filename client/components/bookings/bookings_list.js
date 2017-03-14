import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bookings } from '../../../imports/collections/bookings';
import { Link } from 'react-router';

class BookingsList extends Component {

  onBookingRemove(booking) {
    Meteor.call('bookings.remove', booking);
  };

  renderList() {
    return this.props.bookings.map(booking => {
      const url = `/bookings/${booking._id}`;
      return (
        <li className="list-group-item" key={booking._id}>
          <Link to={url}>Booking {booking._id}</Link>
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={() => this.onBookingRemove(booking)}>
                remove
              </button>
          </span>
        </li>
      );
    });
  };

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('bookings');

  return { bookings: Bookings.find({}).fetch() };
}, BookingsList);
