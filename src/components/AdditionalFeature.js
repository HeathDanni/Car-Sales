import React from 'react';
import {connect} from 'react-redux';
import { addFeature } from '../actions/featureActions';

const AdditionalFeature = ({name, price, addFeature}) => {
  return (
    <li>
      <button onClick={() => addFeature()} className="button">Add</button>
      {name} (+{price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.featureReducer.name,
    price: state.featureReducer.price
  };
};


export default connect(mapStateToProps, {addFeature} )(AdditionalFeature);
