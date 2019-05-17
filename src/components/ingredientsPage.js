import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IngredientsListContainer } from './IngredientsList/IngredientsList';
import IngredientsCreateFormContainer from './IngredientsCreateForm/IngredientsCreateForm';
import { fetchIngredients } from '../actions/ingredientsActions';

const IngredientsPage = ({ fetchIngredients }) => {
  useEffect(() => {
    fetchIngredients();
  });

  return (
    <div>
      <h2>
        Ingredients
      </h2>
      <IngredientsCreateFormContainer/>
      <div>
        <IngredientsListContainer/>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchIngredients: () => {
    dispatch(fetchIngredients());
  },
});

const IngredientsPageContainer = connect(
  null,
  mapDispatchToProps,
)(IngredientsPage);

export default IngredientsPageContainer;