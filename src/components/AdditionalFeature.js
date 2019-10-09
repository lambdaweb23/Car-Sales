import React from 'react';
import { connect } from 'react-redux';
import { addItemAC } from '../actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button" onClick={() => props.addItemAC(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

//give addItem action to connect function and hooks up to store as a potential action
export default connect(
  null, // null is where mapStateToProps function would be but since we don't have any state to display, we put null
  { addItemAC } // passes action to AdditionalFeature as a prop
)(AdditionalFeature);
//AdditionalFeature is already getting mapStateToProps from AdditionalFeatures
