import React from 'react';
import './IngredientsList.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const IngredientsList = ({ ingredients }) => {
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
      {ingredients.map((ingredient) => (
        <tr key={ingredient.name}>
          <td>{ingredient.name}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};


IngredientsList.propTypes = {
  ingredients: propTypes.array.isRequired
};

IngredientsList.defaultProps = {
  ingredients: [],
};

const mapStateToProps = (dispatch) => ({
  ingredients: dispatch.ingredients.ingredients,
});

const IngredientsListContainer = connect(
  mapStateToProps,
  null,
)(IngredientsList);

export default IngredientsList;

export { IngredientsListContainer };
