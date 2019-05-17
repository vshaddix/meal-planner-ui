import React from 'react';
import './UnitOfMeasuresList.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const UnitOfMeasuresList = ({ uoms }) => {
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
  uoms: propTypes.array.isRequired
};

UnitOfMeasuresList.defaultProps = {
  uoms: [],
};

const mapStateToProps = (dispatch) => ({
    uoms: dispatch.unitOfMeasure.uoms,
});

const UnitOfMeasuresListContainer = connect(
  mapStateToProps,
  null,
)(UnitOfMeasuresList);

export default UnitOfMeasuresList;

export { UnitOfMeasuresListContainer };
