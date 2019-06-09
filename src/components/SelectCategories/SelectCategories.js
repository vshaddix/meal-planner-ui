import React, { useState } from 'react';
import './SelectCategories.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCategoryToNewRecipe, removeCategoryFromNewRecipe } from '../../actions/RecipeActions';

const SelectCategories = ({ categories, selectCategory, removeCategoryFromSelected }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [autoCompletedCategories, setAutoCompletedCategories] = useState([]);

  const autoCompleteCategories = (e) => {
    const inputtedText = e.target.value.toLowerCase();
    if (inputtedText === '') {
      setAutoCompletedCategories([]);
      return;
    }
    const categoriesToFilter = categories.filter(category => !selectedCategories.includes(category));
    setAutoCompletedCategories(categoriesToFilter.filter(category => category.name.toLowerCase().indexOf(inputtedText) !== -1));
  };

  const setSelected = (category) => {
    selectCategory(category);
    setSelectedCategories([...selectedCategories, category]);
    setAutoCompletedCategories(autoCompletedCategories.filter(cat => cat.name !== category.name))
  };
  const removeFromSelected = (toBeRemovedCategory) => {
    removeCategoryFromSelected(toBeRemovedCategory);
    const newSelectedCategories = selectedCategories.filter(category => category.name !== toBeRemovedCategory.name);
    setSelectedCategories(newSelectedCategories);
  };
  return (
    <div>
      <input type="text" onInput={autoCompleteCategories}/>
      <div className="autocompletedCategories">
        {autoCompletedCategories.map((category) => (
          <div key={category.name}>{category.name}<button onClick={() => setSelected(category)}>Add</button></div>
        ))}
      </div>
      <div className="selected-categories">
        {selectedCategories.map((category) => (
          <div key={category.name}>
            <span className="selected">{category.name}</span>
            <button onClick={() => removeFromSelected(category)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};


SelectCategories.propTypes = {
  categories: propTypes.array.isRequired
};

SelectCategories.defaultProps = {
  categories: [],
};


const mapDispatchToProps = (dispatch) => ({
  selectCategory: (category) => {
    dispatch(addCategoryToNewRecipe(category));
  },
  removeCategoryFromSelected: (category) => {
    dispatch(removeCategoryFromNewRecipe(category))
  },
});

const mapStateToProps = (dispatch) => ({
  categories: dispatch.categories.categories,
});

const SelectCategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectCategories);

export default SelectCategories;

export { SelectCategoriesContainer };
