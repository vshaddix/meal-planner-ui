import React, { useState } from 'react';
import './SelectIngredients.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const SelectIngredients = ({ ingredients }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [autoCompletedIngredients, setAutoCompletedIngredients] = useState([]);

  const autoCompleteIngredients = (e) => {
    const inputtedText = e.target.value.toLowerCase();
    if (inputtedText === '') {
      setAutoCompletedIngredients([]);
      return;
    }
    const ingredientsToFilter = ingredients.filter(ingredient => !selectedIngredients.includes(ingredient));
    setAutoCompletedIngredients(ingredientsToFilter.filter(ingredient => ingredient.name.toLowerCase().indexOf(inputtedText) !== -1));
  };

  const setSelected = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
    setAutoCompletedIngredients(autoCompletedIngredients.filter(ingre => ingre.name !== ingredient.name))
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
          <span className="selected" key={ingredient.name}>{ingredient.name},</span>
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
