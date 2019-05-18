import React from 'react';
import { connect } from 'react-redux';

const RecipePage = () => {

  return (
    <div>
      <h2>
        Recipes
      </h2>
    </div>
  );
};


const RecipePageContainer = connect(
  null,
  null,
)(RecipePage);

export default RecipePageContainer;