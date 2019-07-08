import React  from 'react';

const RecipeItem = ({ recipe }) => {

  debugger;
  if (! recipe) return;

  const ingredientsList = recipe.ingredients.map(ingredientData => (<div key={ingredientData.ingredient.public_id}><span>{ingredientData.ingredient.name}</span> x {ingredientData.value}<span>{ingredientData.unit_of_measure.name}</span></div>));
  const categoriesList = recipe.categories.map(category => (<div key={category.public_id}><span>{category.name}</span></div>));

  return (
    <div className={"ui card"}>
      <div className="content">
        <span className="header">
          {recipe.name}
        </span>
        <div className="description">
          <div className={"ingredients-list"}>
            <p>Ingredients:</p>
            {ingredientsList}
          </div>
          <hr/>
          <div className="categories-list">
            <p>Categories: </p>
            {categoriesList}
          </div>
          <hr/>
          <div className="steps">
            {recipe.steps.split('\n').map(step => <p key={step}>{step}</p>)}
          </div>
        </div>
      </div>

    </div>
  );
};

export default RecipeItem;

