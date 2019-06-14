import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchIngredients } from '../actions/IngredientsActions';
import { fetchCategories } from '../actions/CategoriesActions';
import { fetchUnitsOfMeasure } from '../actions/UnitOfMeasureActions';
import RecipeCreateFormContainer from './RecipeCreateForm/RecipeCreateForm';


const RecipePage = ({ fetchCategories, fetchIngredients, fetchUnitsOfMeasure }) => {
  useEffect(() => {
    fetchCategories();
    fetchIngredients();
    fetchUnitsOfMeasure();
  });
  return (
    <div>
      <RecipeCreateFormContainer/>
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
});

const RecipePageContainer = connect(
  null,
  mapDispatchToProps,
)(RecipePage);

export default RecipePageContainer;