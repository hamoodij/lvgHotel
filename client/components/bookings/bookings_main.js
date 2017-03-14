import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bookings } from '../../../imports/collections/bookings';
import CreateBookings from './bookings_create';

class BookingsMain extends Component {
  render() {
    console.log(this.props.booking);
    return (
      <CreateBookings booking={this.props.booking}/>
    );
  }
};

export default createContainer((props) => {
  const { bookingId } = props.params;
  Meteor.subscribe('bookings');

  return { booking: Bookings.findOne(bookingId) };

}, BookingsMain);
