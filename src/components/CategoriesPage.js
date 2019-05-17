import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CategoriesListContainer } from './CategoriesList/CategoriesList';
import CategoriesCreateFormContainer from './CategoriesCreateForm/CategoriesCreateForm';
import { fetchCategories } from '../actions/CategoriesActions';

const CategoriesPage = ({ fetchCategories }) => {
  useEffect(() => {
    fetchCategories();
  });

  return (
    <div>
      <h2>
        Categories
      </h2>
      <CategoriesCreateFormContainer/>
      <div>
        <CategoriesListContainer/>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
});

const CategoriesPageContainer = connect(
  null,
  mapDispatchToProps,
)(CategoriesPage);

export default CategoriesPageContainer;