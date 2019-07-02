import React, { useState } from 'react';
import './SelectIngredients.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addIngredientToNewRecipe } from '../../actions/RecipeActions/NewRecipeActions';

const SelectIngredients = ({ ingredients, unitsOfMeasure, addNewIngredient  }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [selectedUom, setSelectedUom] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const setSelectedIng = (ingredientId) => {
    if (!ingredientId) return;
    const ingredient = ingredients.find(ingredient => ingredient.public_id === ingredientId);
    addNewIngredient(ingredient, selectedUom, quantity);
    setSelectedIngredient(ingredient);
  };

  const setSelectedUnit = (uomId) => {
    if (! uomId) return;
    const uom = unitsOfMeasure.find(uom => uom.public_id === uomId);
    setSelectedUom(uom);
    if (! selectedIngredient) return;
    addNewIngredient(selectedIngredient, uom, quantity);
  };

  const addQuantity = (qty) => {
    setQuantity(qty);
    if (! selectedIngredient) return;
    addNewIngredient(selectedIngredient, selectedUom, qty);
  };

  return (
    <div>
      <select onChange={(e) => setSelectedIng(e.target.value)} className="Ingredient" id="">
        <option value="">Select ingredient</option>
        {ingredients.map(ingredient => (
          <option key={ingredient.public_id} value={ingredient.public_id}>{ingredient.name}</option>
        ))}
      </select>
      <select onChange={(e) => setSelectedUnit(e.target.value)} className="Ingredient-unit-of-measure" id="">
        <option value="">Select unit of measure</option>
        {unitsOfMeasure.map(uom => (
          <option key={uom.public_id} value={uom.public_id}>{uom.name}</option>
        ))}
      </select>
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" onChange={(e) => addQuantity(e.target.value)}/>
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
  addNewIngredient: (ingredient, uom, qty) => {
    dispatch(addIngredientToNewRecipe(ingredient, uom, qty));
  }
});


const mapStateToProps = (dispatch) => ({
  ingredients: dispatch.ingredients.ingredients,
  unitsOfMeasure: dispatch.unitOfMeasure.uoms,
});

const SelectIngredientsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectIngredients);

export default SelectIngredients;

export { SelectIngredientsContainer };
