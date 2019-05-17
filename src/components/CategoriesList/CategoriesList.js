import React from 'react';
import './CategoriesList.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const CategoriesList = ({ categories }) => {
  return (
    <table>
      <thead>
      <tr>
        <th>
          Name
        </th>
      </tr>
      </thead>
      <tbody>
      {categories.map((category) => (
        <tr key={category.name}>
          <td>{category.name}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};


CategoriesList.propTypes = {
  categories: propTypes.array.isRequired
};

CategoriesList.defaultProps = {
  categories: [],
};

const mapStateToProps = (dispatch) => ({
  categories: dispatch.categories.categories,
});

const CategoriesListContainer = connect(
  mapStateToProps,
  null,
)(CategoriesList);

export default CategoriesList;

export { CategoriesListContainer };
