import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchIngredients } from '../actions/IngredientsActions';
import { fetchCategories } from '../actions/CategoriesActions';
import { fetchUnitsOfMeasure } from '../actions/UnitOfMeasureActions';
import { fetchRecipes } from '../actions/RecipeActions/RecipeActions';
import RecipeCreateFormContainer from './RecipeCreateForm/RecipeCreateForm';
import RecipesList from './RecipesList/RecipesList';


const RecipePage = ({ fetchCategories, fetchIngredients, fetchUnitsOfMeasure, fetchRecipes }) => {
  useEffect(() => {
    fetchCategories();
    fetchIngredients();
    fetchUnitsOfMeasure();
    fetchRecipes();
  });

  const [addNewRecipe, setAddNewRecipe] = useState(false);
  return (
    <div>
      <div className="recipes-list">
        <RecipesList />
      </div>
      {addNewRecipe &&
        <RecipeCreateFormContainer/>
      }

      <button onClick={() => setAddNewRecipe(!addNewRecipe)}>Add new recipe</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
  fetchIngredients: () => {
    dispatch(fetchIngredients());
  },
  fetchUnitsOfMeasure: () => {
    dispatch(fetchUnitsOfMeasure());
  },
  fetchRecipes: () => {
    dispatch(fetchRecipes());
  },
});

const RecipePageContainer = connect(
  null,
  mapDispatchToProps,
)(RecipePage);

export default RecipePageContainer;