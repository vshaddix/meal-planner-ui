import React, { useState } from 'react';
import './SelectIngredients.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addIngredientToNewRecipe } from '../../actions/RecipeActions/NewRecipeActions';

const SelectIngredients = ({ ingredients, addNewIngredient  }) => {
  const [selectedIngredienties, setSelectedIngredienties] = useState([]);

  const setSelected = (ingredientId) => {
    if (!ingredientId) return;
    const ingredient = ingredients.find(ingredient => ingredient.public_id === ingredientId);
    addNewIngredient(ingredient);
    setSelectedIngredienties([...selectedIngredienties, ingredient]);
  };

  return (
    <div>
      <select onChange={(e) => setSelected(e.target.value)} className="Ingredient" id="">
        <option value="">Select ingredient</option>
        {ingredients.map(ingredient => (
          <option key={ingredient.public_id} onSelect={() => setSelected(ingredient)} value={ingredient.public_id}>{ingredient.name}</option>
        ))}
      </select>
    </div>
  );
};


SelectIngredients.propTypes = {
  ingredients: propTypes.array.isRequired
};

SelectIngredients.defaultProps = {
  ingredients: [],
};

const mapDispatchToProps = (dispatch) => ({
  addNewIngredient: (ingredient) => {
    dispatch(addIngredientToNewRecipe(ingredient));
  }
});


const mapStateToProps = (dispatch) => ({
  ingredients: dispatch.ingredients.ingredients,
});

const SelectIngredientsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectIngredients);

export default SelectIngredients;

export { SelectIngredientsContainer };
