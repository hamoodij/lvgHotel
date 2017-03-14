import { Meteor } from 'meteor/meteor';
import { Bookings } from '../imports/collections/bookings';

Meteor.startup(() => {
  Meteor.publish('bookings', function() {
    return Bookings.find({ ownerId: this.userId });
  });
});
