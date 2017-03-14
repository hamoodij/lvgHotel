// main imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import from components folder
import App from './components/app';
import BookingsMain from './components/bookings/bookings_main';
import BookingsList from './components/bookings/bookings_list';
// import db
import { Bookings } from '../imports/collections/bookings';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BookingsList} />
      <Route path="bookings/:bookingId" component={BookingsMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('render'));
});
