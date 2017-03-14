import React from 'react';
// components
import Header from './header';

export default (props) => {
  return(
    <div>
      <Header />
      {props.children}
    </div>
  );
};
