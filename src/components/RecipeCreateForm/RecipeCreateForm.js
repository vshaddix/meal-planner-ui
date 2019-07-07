import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectCategoriesContainer } from '../SelectCategories/SelectCategories';
import { SelectIngredientsContainer } from "../SelectIngredients/SelectIngredients";
import { addTitleToNewRecipe, addStepsToNewRecipe } from '../../actions/RecipeActions/NewRecipeActions';

class RecipeCreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredientsCount: 1,
      categories: [],
      title: '',
      steps: '',
    };

    this.addTitleAction = props.addTitleToNewRecipe;
    this.addStepsToNewRecipe = props.addStepsToNewRecipe;
  }

  createIngredients() {
    let ingredients = [];
    for (let x = 0; x < this.state.ingredientsCount; x++) {
      ingredients.push(<SelectIngredientsContainer key={x}/>);
    }

    return ingredients;
  }

  setTitle(title) {
    this.setState({
      title
    }, this.addTitleAction(title));
  }

  setSteps(steps) {
    this.setState({
      steps
    }, this.addStepsToNewRecipe(steps));
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
          <input onChange={(e) => this.setTitle(e.target.value)} value={this.state.title} name={"recipe-title"} type="text"/>
        </div>
        <hr/>
        <div className="recipe-categories">
          <span>Select categories for this recipe</span>
          <SelectCategoriesContainer/>
        </div>
        <hr/>
        <div className="recipe-ingredients">
          <span>Select ingredients:</span>
          <button onClick={() => this.setState({ingredientsCount: this.state.ingredientsCount + 1})}>Add more!</button>
          {this.createIngredients()}
        </div>
        <hr/>
        <div className="recipe-steps">
          <span>How to prepare the recipe:</span>
          <textarea name="recipe-steps" cols="150" rows="70" onInput={(e) => this.setSteps(e.target.value)}></textarea>
        </div>
        <hr/>
        <button>Create</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTitleToNewRecipe: (title) => {
    dispatch(addTitleToNewRecipe(title));
  },
  addStepsToNewRecipe: (steps) => {
    dispatch(addStepsToNewRecipe(steps));
  },
});

const mapStateToProps = (response) => ({
  response
});

const RecipeCreateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeCreateForm);

export default RecipeCreateFormContainer;
