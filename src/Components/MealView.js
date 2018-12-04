import React from 'react';

function MealView(props) {
  let meal = props.data.meals[0];
  return (
    <div className={'mealContainer'}>
      <div className={'mealTitle'}>
        <h2>{meal.strMeal}</h2>
      </div>
      <div className={'mealDescription'}>
        <p>{meal.strInstructions}</p>
      </div>
      <div className={'mealImage'}>
        <img src={meal.strMealThumb} alt={meal.strMeal}/>
      </div>

      <div className={'mealIngredients'}>
        <button onClick={this.getIngredients.bind(this)}>Log </button>
      </div>
    </div>
  )
}

function getIngredients(meal) {
  let result = null;
  let strIngredients = Object.entries(meal).filter((item) => {
    return item[0].includes('strIngredient')
  });
  console.log(strIngredients);
  strIngredients.sort();
}

function getMeasures(meal) {
    let result = null;
    let strMeasure = Object.entries(meal).filter((item) => {
      return item[0].includes('strMeasure')
    });

    strMeasure.sort()
}

export default MealView;