import React from 'react';
import ReactDOM from "react-dom";
import MealView from './MealView';

export default function MealCategory(props) {
  return (
    <div><h1>Meal Category Page</h1>
      <div>{props.data.meals.map(function (item) {
        return (
          <div className={'mealContainer'}>
            <button onClick={fetchMealView.bind(this, item.idMeal, props.data)}>{item.strMeal}</button>
          </div>
        )
      })}
      </div>
    </div>
  )
}

function fetchMealView(id, data){
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((resp) => resp.json())
    .then((function (data) {
      ReactDOM.render(<MealView data={data} />, document.getElementById('content'))
    }))
}