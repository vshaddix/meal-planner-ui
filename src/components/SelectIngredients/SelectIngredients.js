import React, { useState } from 'react';
import './SelectIngredients.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const SelectIngredients = ({ ingredients }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [autoCompletedIngredients, setAutoCompletedIngredients] = useState([]);
  const [searchString, setSearchString] = useState('');

  const filterIngredientsByName = (searchString) => {
    const ingredientsToFilter = ingredients.filter(ingredient => !selectedIngredients.includes(ingredient));
    return ingredientsToFilter.filter(ingredient => ingredient.name.toLowerCase().indexOf(searchString) !== -1);
  };

  const autoCompleteIngredients = (e) => {
    const inputtedText = e.target.value.toLowerCase();
    setSearchString(inputtedText);
    if (inputtedText === '') {
      setAutoCompletedIngredients([]);
      return;
    }
    setAutoCompletedIngredients(filterIngredientsByName(searchString));
  };

  const setSelected = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
    setAutoCompletedIngredients(autoCompletedIngredients.filter(ing => ing.name !== ingredient.name))
  };

  const removeFromSelected = (ingredient) => {
    const newSelectedCategories = selectedIngredients.filter(ing => ing.name !== ingredient.name);
    setSelectedIngredients(newSelectedCategories);
    if (ingredient.name.indexOf(searchString) > -1) {
      setAutoCompletedIngredients([...autoCompletedIngredients, ingredient]);
    }
  };
  return (
    <div>
      <input type="text" onInput={autoCompleteIngredients}/>
      <div className="autocompleted-ingredients">
        {autoCompletedIngredients.map((ingredient) => (
          <div key={ingredient.name}>{ingredient.name}<button onClick={() => setSelected(ingredient)}>Add</button></div>
        ))}
      </div>
      <div className="selected-ingredients">
        {selectedIngredients.map((ingredient) => (
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
