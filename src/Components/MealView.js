import React from 'react';
import Youtube from 'react-youtube';

export default function MealView(props) {
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
        <h2>I am the Ingredient list !</h2>
        <ul className={'ingredientList'}>
          {getIngredients(meal).map(function(d, idx){
            return (<li key={idx}>{'Ingredients: ' + d.ingredient + ' measurements: ' + d.measurement}</li>)
          })}
        </ul>
      </div>

      <div className={'mealVideo'}>
        <Youtube videoId={meal.strYoutube.split('v=')[1]}/>
      </div>
    </div>
  )
}

function getIngredients(data) {
  let result = null;
  //TODO implement
  let strIngredients = Object.entries(data).filter((item)=>{
    return item[0].includes('strIngredient') && item[1]
  });

  strIngredients.sort(function (a, b) {
    return parseInt(a[0].replace('strIngredient', '')) - parseInt(b[0].replace('strIngredient', ''));
  });

  let strMeasures = Object.entries(data).filter((item)=>{
    return item[0].includes('strMeasure')
  });
  strMeasures.sort(function (a, b) {
    return parseInt(a[0].replace('strMeasure', '')) - parseInt(b[0].replace('strMeasure', ''));
  });

  result = strIngredients.map((item, i)=>{
    let pointerToMeasurement = ('strMeasure'+(i+1));
    return {ingredient: item[1], measurement: data[pointerToMeasurement]}
  });

  return result;
}
