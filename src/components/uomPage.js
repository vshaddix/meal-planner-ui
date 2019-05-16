import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUnitOfMeasure } from '../actions/unitOfMeasureActions';
import { UnitOfMeasuresListContainer } from './UnitOfMeasuresList/UnitOfMeasuresList';

class UnitOfMeasurePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uomName: ''
    };
    this.createNewUom = this.createNewUom.bind(this);
  }

  createNewUom() {
    const name = this.state.uomName;

    const data = {
      name
    };

    this.props.dispatch(createUnitOfMeasure(data));
  }

  render() {
    let message = '';

    if (this.props.response.unitOfMeasure.hasOwnProperty('responseMessage')) {
      message = this.props.response.unitOfMeasure.responseMessage;
    }

    return (
      <div>
        <h2>
          Unit of measures
        </h2>
        <div>
          <h4>Add a new unit of measure</h4>
          <h5>{message}</h5>
        </div>
        <div className="uom-form">
          <label htmlFor="uom-name">Name:</label>
          <input onChange={(e) => this.setState({uomName: e.target.value})} value={this.state.uomName} name={"uom-name"} type="text"/>
          <button onClick={this.createNewUom}>Create</button>
        </div>
        <div>
          <UnitOfMeasuresListContainer/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  response
});


const UomViewContainer = connect(
  mapStateToProps,
  null,
)(UnitOfMeasurePage);

export default UomViewContainer;
