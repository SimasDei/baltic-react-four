import React from 'react';
import ReactDOM from "react-dom";
import MealCategory from './MealCategory';
// import App from '../App';
// import Youtube from 'react-youtube';
// import ReactDOM from "react-dom";

export default function MealCategories(props) {
  return (
    <div className={'categoryContainer'}>{props.data.categories.map(function (item) {
      return (
        <div>
          <div className={'mealTitle'}><h2>{item.strCategory}</h2></div>
          <img src={item.strCategoryThumb} alt=""/>

          <div>
            <button className={'buttonCategory'} onClick={fetchMealCategory.bind(this, item.strCategory, props.data)}>Click Me</button>
          </div>
        </div>
      )
    })}</div>
  )
}


// Fetch meals by using categories ide
// filter by category, change end of url https://www.themealdb.com/api/json/v1/1/filter.php?c={'seafood}

function fetchMealCategory(category,data){
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((resp) => resp.json())
    .then((function (data) {
      ReactDOM.render(<MealCategory data={data} />, document.getElementById('content'))
    }))
}


