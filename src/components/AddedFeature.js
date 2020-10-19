import React from 'react';
import {removeFeature} from '../actions/featureActions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = {removeFeature};

export default AddedFeature;
