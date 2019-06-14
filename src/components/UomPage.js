import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { UnitOfMeasuresListContainer } from './UnitOfMeasuresList/UnitOfMeasuresList';
import UnitOfMeasureCreateForm from './UnitOfMeasureCreateForm/UnitOfMeasureCreateForm';
import { fetchUnitsOfMeasure } from '../actions/UnitOfMeasureActions';

const UnitOfMeasurePage = ({ fetchUnitsOfMeasure }) => {
  useEffect(() => {
    fetchUnitsOfMeasure();
  });

  return (
    <div>
      <h2>
        Unit of measures
      </h2>
      <UnitOfMeasureCreateForm/>
      <div>
        <UnitOfMeasuresListContainer/>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchUnitsOfMeasure: () => {
    dispatch(fetchUnitsOfMeasure());
  },
});

const UnitOfMeasurePageContainer = connect(
  null,
  mapDispatchToProps,
)(UnitOfMeasurePage);

export default UnitOfMeasurePageContainer;