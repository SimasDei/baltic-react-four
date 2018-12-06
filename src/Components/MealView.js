import React from 'react';
import App from '../App';
import Youtube from 'react-youtube';
import ReactDOM from "react-dom";
import Aux from "./Auxilary";

export default function MealView(props) {
  let meal = props.data.meals[0];
  return (
    <Aux>
      <div
        style={{color: '#fff'}}
      className={'pathTaken'}>
        The Path Taken:
        <span
          className={'pathHome'}
          style={{fontWeight: 'bold'}} onClick={goBack}>Home</span>
        <strong> > </strong>
        <span
          style={{fontWeight: 'bold', fontSize: '24px'}}>Beef</span>
        <strong> > </strong>
        <span
          style={{fontWeight: 'bold', fontSize: '24px'}}>Beef and Mustard Pie</span>
      </div>

      <div className={'mealContainer'}>
        <div className={'mealTitle'}>
          <h2>{meal.strMeal}</h2>
        </div>
        <div className={'mealHead'}>
          <div className={'mealDescription'}>
            <p>{meal.strInstructions}</p>
          </div>
          <div className={'mealImage'}>
            <img src={meal.strMealThumb} alt={meal.strMeal}/>
          </div>
        </div>
        <div className={'mealIngredients'}>
          <h2>I am the Ingredient list !</h2>
          <ul className={'ingredientList'}>
            {getIngredients(meal).map(function (value, key) {
              return (<li key={key}><span className={'ingredientSpan'}>{'Ingredient: ' + value.ingredient}</span> <span
                className={'measureSpan'}>Measurement: {value.measurement}</span></li>)
            })}
          </ul>
        </div>

        <div className={'mealVideo'}>
          <Youtube videoId={meal.strYoutube.split('v=')[1]}/>
        </div>

        <button onClick={goBack}>Go back</button>
      </div>
    </Aux>
  )
}

let goBack = () => {
  ReactDOM.render(<App/>, document.getElementById('content'));
};

function getIngredients(data) {
  let result = null;
  //TODO implement
  let strIngredients = Object.entries(data).filter((item) => {
    return item[0].includes('strIngredient') && item[1]
  });

  strIngredients.sort(function (a, b) {
    return parseInt(a[0].replace('strIngredient', '')) - parseInt(b[0].replace('strIngredient', ''));
  });

  let strMeasures = Object.entries(data).filter((item) => {
    return item[0].includes('strMeasure')
  });
  strMeasures.sort(function (a, b) {
    return parseInt(a[0].replace('strMeasure', '')) - parseInt(b[0].replace('strMeasure', ''));
  });

  result = strIngredients.map((item, i) => {
    let pointerToMeasurement = ('strMeasure' + (i + 1));
    return {ingredient: item[1], measurement: data[pointerToMeasurement]}
  });

  return result;
}

