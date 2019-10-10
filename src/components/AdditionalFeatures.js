import React from 'react';
// function to connect the store to the component
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ additionalFeatures }) => {
  return { additionalFeatures };
}

// connect is where you pass props from store
export default connect(
  mapStateToProps,
  {}
)(AdditionalFeatures);