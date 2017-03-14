import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bookings.insert': function() {
    return Bookings.insert({
      createdAt: new Date(),
      ownerId: this.userId,
      sharedWith: [],
      name: '',
      surname: '',
      hotel: '',
      noRooms: 0,
      rooms: [
        {
          roomType: '',
          noNights: 0,
          confNo: '',
          checkIn: '',
          checkOut: ''
        }
      ],
      paymentMethod: '',
      hotelContact: '',
      ref: '',
      costPrice: 0,
      salePrice: 0,
      cancel: '',
      comms: 0
    });
  },
  'bookings.remove': function(booking) {
    return Bookings.remove(booking);
  }
});

export const Bookings = new Mongo.Collection('bookings');
