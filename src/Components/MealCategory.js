import React from 'react';
import ReactDOM from "react-dom";
import MealView from './MealView';
import Aux from './Auxilary';

export default function MealCategory(props) {
  return (
    <Aux>
      <div style={{color: '#fff'}}>The Path Taken: <span style={{fontWeight: 'bold'}}>Home</span><strong> > </strong> <span style={{fontWeight: 'bold', fontSize: '24px'}}>Beef</span></div>
      <div><h1>Meal Category Page</h1>
        <div>{props.data.meals.map(function (item) {
          return (
            <div className={'mealContainer'}>
              <img className={'mealContainer--image'} src={item.strMealThumb} alt={item.idMeal}/>
              <button onClick={fetchMealView.bind(this, item.idMeal, props.data)}>{item.strMeal}</button>
            </div>
          )
        })}
        </div>
      </div>
    </Aux>
  )
}

function fetchMealView(id, data) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((resp) => resp.json())
    .then((function (data) {
      ReactDOM.render(<MealView data={data}/>, document.getElementById('content'))
    }))
}