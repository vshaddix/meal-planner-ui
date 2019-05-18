import React, { useState } from 'react';
import './SelectCategories.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const SelectCategories = ({ categories }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [autoCompletedCategories, setAutoCompletedCategories] = useState(categories);

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
    setSelectedCategories([...selectedCategories, category]);
    setAutoCompletedCategories(autoCompletedCategories.filter(cat => cat.name !== category.name))
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
          <span className="selected" key={category.name}>{category.name},</span>
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

const mapStateToProps = (dispatch) => ({
  categories: dispatch.categories.categories,
});

const SelectCategoriesContainer = connect(
  mapStateToProps,
  null,
)(SelectCategories);

export default SelectCategories;

export { SelectCategoriesContainer };
