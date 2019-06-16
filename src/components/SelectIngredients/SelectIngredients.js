import React, { useState } from 'react';
import './SelectIngredients.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const SelectIngredients = ({ ingredients }) => {
  const [selectedIngredienties, setSelectedIngredienties] = useState([]);

  const setSelected = (ingredientId) => {
    const ingredient = ingredients.find(ingredient => ingredient.public_id === ingredientId);
    setSelectedIngredienties([...selectedIngredienties, ingredient]);
  };

  const removeFromSelected = (toBeRemovedIngredient) => {
    const newSelectedIngredients = selectedIngredienties.filter(ingredient => ingredient.public_id !== toBeRemovedIngredient.public_id);
    setSelectedIngredienties(newSelectedIngredients);
  };

  return (
    <div>
      <select onChange={(e) => setSelected(e.target.value)} className="Ingredient" id="">
        <option value="">Select ingredient</option>
        {ingredients.map(ingredient => (
          <option key={ingredient.public_id} onSelect={() => setSelected(ingredient)} value={ingredient.public_id}>{ingredient.name}</option>
        ))}
      </select>
      <div className="selected-categories">
        {selectedIngredienties.map((ingredient) => (
          <div key={ingredient.name}>
            <span className="selected">{ingredient.name}</span>
            <button onClick={() => removeFromSelected(ingredient)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};


SelectIngredients.propTypes = {
  ingredients: propTypes.array.isRequired
};

SelectIngredients.defaultProps = {
  ingredients: [],
};

const mapStateToProps = (dispatch) => ({
  ingredients: dispatch.ingredients.ingredients,
});

const SelectIngredientsContainer = connect(
  mapStateToProps,
  null,
)(SelectIngredients);

export default SelectIngredients;

export { SelectIngredientsContainer };
