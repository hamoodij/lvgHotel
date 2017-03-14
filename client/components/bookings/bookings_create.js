import React, { Component } from 'react';
import Subschema, { loader, Form } from 'Subschema';
import MaskedInput from 'react-maskedinput';

loader.addType('MaskedInput', MaskedInput);

const schema = {
  title: { type: 'Select', options: ['Select', 'Mr', 'Mrs', 'Ms', 'Shiekh', 'Shiekha'] },
  name: 'Text',
  surname: 'Text',
  hotel: 'Text'
};

class CreateBookings extends Component {

  onInputChange(content) {
    console.log(content);
  }

  render() {
    return (
      <Form onChange={this.onInputChange.bind(this)} schema={{schema}} loader={loader} />
    );
  }
};

export default CreateBookings;
