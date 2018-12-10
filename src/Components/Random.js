import React from 'react';
import MealView from './MealView';

const random = (props) => {

  return (
    <div>Random Uneatable Thing
      <button onClick={getRandomMeal.bind(this, 1)}>Works?</button>
    </div>
  )
};

// let getRandomMeal = () => {
//   let data = null;
//   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then(function (response,) {
//       return (
//         response.json()
//       )
//     }).then(function (myJson) {
//     data = myJson;
//     return data;
// };

const getRandomMeal = (iteration) => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(function (response,) {
      return (
        response.json()
      )
    }).then(function (myJson) {
    let data = myJson;
    data = data.meals[0];
    let result = null;
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
      return {ingredient: item[1], measurement: data[pointerToMeasurement]};
    });

    let ingredientArray = [result];

    if (iteration <= 3) {
      for ( iteration; iteration < 3; iteration++) {
        ingredientArray.concat(getRandomMeal());
      }
    }
    console.log(ingredientArray);
    return ingredientArray;
  })
};

export default random;