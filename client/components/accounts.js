import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  // render external library
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
  // destroy external library
  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  render() {
    return (
      <a ref="container"></a>
    );
  }
};

export default Accounts;
