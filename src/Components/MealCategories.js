import React from 'react';
import ReactDOM from "react-dom";
import MealCategory from './MealCategory';
import Aux from './Auxilary';
import App from "../App";
import Routing from './Routing';
// import Random from './Random';
// import App from '../App';
// import Youtube from 'react-youtube';
// import ReactDOM from "react-dom";

export default function MealCategories(props) {
  return (
    <Aux>
      <div
        style={{color: '#fff'}}
        className={'pathTaken'}>
        The Path Taken:
        <span
          className={'pathHome'}
          style={{fontWeight: 'bold'}} onClick={goBack}>Home</span>
      </div>


    <div className={'categoryContainer'}>
      {props.data.categories.map(function (item) {
        return (
          <div>
            <div className={'mealTitle'}><h2>{item.strCategory}</h2></div>
            <img src={item.strCategoryThumb} alt=""/>

            <div className={'buttonContainer'}>
              <button className={'buttonCategory'}
                      onClick={fetchMealCategory.bind(this, item.strCategory, props.data)}>Click Me
              </button>
            </div>
          </div>
        )
      })}</div>

      <div className={'categoryContainer'} style={{marginTop: '36px'}}>
        <Routing/>
      </div >

    </Aux>
  )
}


// Fetch meals by using categories ide
// filter by category, change end of url https://www.themealdb.com/api/json/v1/1/filter.php?c={'seafood}

function fetchMealCategory(category) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((resp) => resp.json())
    .then((function (data) {
      ReactDOM.render(<MealCategory data={data} category={category} />, document.getElementById('content'))
    }))
}

let goBack = () => {
  ReactDOM.render(<App/>, document.getElementById('content'));
};