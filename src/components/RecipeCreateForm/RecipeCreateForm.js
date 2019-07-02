import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectCategoriesContainer } from '../SelectCategories/SelectCategories';
import { SelectIngredientsContainer } from "../SelectIngredients/SelectIngredients";
// import { createIngredient } from '../../actions/IngredientsActions';

class RecipeCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsCount: 1,
      categories: [],
      title: '',
    };
  }

  createIngredients() {
    let ingredients = [];
    for (let x = 0; x < this.state.ingredientsCount; x++) {
      ingredients.push(<SelectIngredientsContainer key={x}/>);
    }

    return ingredients;
  }

  render() {
    let message = '';

    // if (this.props.response.ingredients.hasOwnProperty('responseMessage')) {
    //   message = this.props.response.ingredients.responseMessage;
    // }

    return (
      <div>
        <h4>Add a new recipe</h4>
        <h5>{message}</h5>
        <div className="recipe-form">
          <label htmlFor="recipe-title">Title:</label>
          <input onChange={(e) => this.setState({title: e.target.value})} value={this.state.title} name={"recipe-title"} type="text"/>
        </div>
        <hr/>
        <div className="recipe-categories">
          <span>Select categories for this recipe</span>
          <SelectCategoriesContainer/>
        </div>
        <hr/>
        <div className="recipe-ingredients">
          <span>Select ingredients:</span>
          {this.createIngredients()}
          <button onClick={() => this.setState({ingredientsCount: this.state.ingredientsCount + 1})}>Add more!</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  response
});

const RecipeCreateFormContainer = connect(
  mapStateToProps,
  null,
)(RecipeCreateForm);

export default RecipeCreateFormContainer;
