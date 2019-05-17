import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createIngredient } from '../../actions/ingredientsActions';

class IngredientsCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientName: ''
    };
    this.createNewIngredient = this.createNewIngredient.bind(this);
  }

  createNewIngredient() {
    const name = this.state.ingredientName;

    const data = {
      name
    };

    this.props.dispatch(createIngredient(data));
  }

  render() {
    let message = '';

    if (this.props.response.ingredients.hasOwnProperty('responseMessage')) {
      message = this.props.response.ingredients.responseMessage;
    }

    return (
      <div>
        <h4>Add a new ingredient</h4>
        <h5>{message}</h5>
        <div className="ingredient-form">
          <label htmlFor="ingredient-name">Name:</label>
          <input onChange={(e) => this.setState({ingredientName: e.target.value})} value={this.state.ingredientName} name={"ingredient-name"} type="text"/>
          <button onClick={this.createNewIngredient}>Create</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  response
});

const IngredientsCreateFormContainer = connect(
  mapStateToProps,
  null,
)(IngredientsCreateForm);

export default IngredientsCreateFormContainer;
