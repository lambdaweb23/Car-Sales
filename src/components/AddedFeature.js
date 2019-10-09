import React from 'react';

import { connect } from 'react-redux';
import { removeItemAC } from '../actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeItemAC(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  { removeItemAC }
)(AddedFeature);
