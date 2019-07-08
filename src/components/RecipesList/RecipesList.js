import React  from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeItem from '../RecipeItem/RecipeItem';

const RecipesList = ({ ingredients, unitsOfMeasure, recipes  }) => {

  const recipesList = recipes.map(recipe => <RecipeItem key={recipe.name} recipe={recipe}/>);

  // recipes[0].steps.split('\n')
  return (
    <div className="ui cards">
      {recipesList}
    </div>
  );
};


RecipesList.propTypes = {
  ingredients: propTypes.array.isRequired,
  unitsOfMeasure: propTypes.array.isRequired,
  recipes: propTypes.array.isRequired,
};

RecipesList.defaultProps = {
  ingredients: [],
  unitsOfMeasure: [],
  recipes: [],
};

const mapStateToProps = (dispatch) => ({
  ingredients: dispatch.ingredients.ingredients,
  unitsOfMeasure: dispatch.unitOfMeasure.uoms,
  recipes: dispatch.RecipeReducer
});

const SelectIngredientsContainer = connect(
  mapStateToProps,
  null,
)(RecipesList);

export default SelectIngredientsContainer;
