import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUnitOfMeasure } from '../../actions/unitOfMeasureActions';

class UnitOfMeasureCreateForm extends Component {
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
          <h4>Add a new unit of measure</h4>
          <h5>{message}</h5>
        <div className="uom-form">
          <label htmlFor="uom-name">Name:</label>
          <input onChange={(e) => this.setState({uomName: e.target.value})} value={this.state.uomName} name={"uom-name"} type="text"/>
          <button onClick={this.createNewUom}>Create</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  response
});


const UnitOfMeasureCreateFormContainer = connect(
  mapStateToProps,
  null,
)(UnitOfMeasureCreateForm);

export default UnitOfMeasureCreateFormContainer;
