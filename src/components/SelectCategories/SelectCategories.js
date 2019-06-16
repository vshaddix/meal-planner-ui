import React, { useState } from 'react';
import './SelectCategories.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCategoryToNewRecipe, removeCategoryFromNewRecipe } from '../../actions/RecipeActions/RecipeActions';

const SelectCategories = ({ categories, selectCategory, removeCategoryFromSelected }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const setSelected = (categoryId) => {
    const category = categories.find(cat => cat.public_id === categoryId);
    selectCategory(category);
    setSelectedCategories([...selectedCategories, category]);
  };

  const removeFromSelected = (toBeRemovedCategory) => {
    removeCategoryFromSelected(toBeRemovedCategory);
    const newSelectedCategories = selectedCategories.filter(category => category.name !== toBeRemovedCategory.name);
    setSelectedCategories(newSelectedCategories);
  };
  return (
    <div>
      <select onChange={(e) => setSelected(e.target.value)} className="Category" id="">
        <option value="">Select category</option>
        {categories.map(category => (
          <option key={category.public_id} onSelect={() => setSelected(category)} value={category.public_id}>{category.name}</option>
        ))}
      </select>
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
