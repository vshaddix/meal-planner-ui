import React, { useEffect }  from 'react';
import './UnitOfMeasuresList.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUnitsOfMeasure } from '../../actions/unitOfMeasureActions';

const UnitOfMeasuresList = ({ uoms, fetchUnitsOfMeasure }) => {
  useEffect(() => {
    fetchUnitsOfMeasure();
  });

  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
        </tr>
      </thead>
      <tbody>
      {uoms.map((uom) => (
        <tr key={uom.name}>
          <td>{uom.name}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};


UnitOfMeasuresList.propTypes = {
  fetchUnitsOfMeasure: propTypes.func.isRequired,
  uoms: propTypes.array.isRequired
};

UnitOfMeasuresList.defaultProps = {
  uoms: [],
  fetchUnitsOfMeasure: () => {}
};

const mapStateToProps = (dispatch) => ({
    uoms: dispatch.unitOfMeasure.uoms,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUnitsOfMeasure: () => {
    dispatch(fetchUnitsOfMeasure());
  },
});

const UnitOfMeasuresListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnitOfMeasuresList);

export default UnitOfMeasuresList;

export { UnitOfMeasuresListContainer };
