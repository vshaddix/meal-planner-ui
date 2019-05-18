import React, { useState } from 'react';
import './SelectUnitsOfMeasure.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const SelectUnitsOfMeasure = ({ uoms }) => {
  const [selectedUoms, setSelectedUoms] = useState([]);
  const [autoCompletedUoms, setAutoCompletedUoms] = useState([]);

  const autoCompleteUoms = (e) => {
    const inputtedText = e.target.value.toLowerCase();
    if (inputtedText === '') {
      setAutoCompletedUoms([]);
      return;
    }
    const uomsToFilter = uoms.filter(uom => !selectedUoms.includes(uom));
    setAutoCompletedUoms(uomsToFilter.filter(uom => uom.name.toLowerCase().indexOf(inputtedText) !== -1));
  };

  const setSelected = (uom) => {
    setSelectedUoms([...selectedUoms, uom]);
    setAutoCompletedUoms(autoCompletedUoms.filter(unitOfMeasure => unitOfMeasure.name !== uom.name))
  };
  return (
    <div>
      <input type="text" onInput={autoCompleteUoms}/>
      <div className="autocompleted-uoms">
        {autoCompletedUoms.map((uom) => (
          <div key={uom.name}>{uom.name}<button onClick={() => setSelected(uom)}>Add</button></div>
        ))}
      </div>
      <div className="selected-uoms">
        {selectedUoms.map((uom) => (
          <span className="selected" key={uom.name}>{uom.name},</span>
        ))}
      </div>
    </div>
  );
};


SelectUnitsOfMeasure.propTypes = {
  uoms: propTypes.array.isRequired
};

SelectUnitsOfMeasure.defaultProps = {
  uoms: [],
};

const mapStateToProps = (dispatch) => ({
  uoms: dispatch.unitOfMeasure.uoms,
});

const SelectUnitsOfMeasureContainer = connect(
  mapStateToProps,
  null,
)(SelectUnitsOfMeasure);

export default SelectUnitsOfMeasure;

export { SelectUnitsOfMeasureContainer };
