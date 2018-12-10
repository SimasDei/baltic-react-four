// import React from 'react';
// import MealView from './MealView';
//
// const random = (props) => {
//
//   return (
//     <div>Random Uneatable Thing
//       <button onClick={''}>Works?</button>
//     </div>
//   )
// };
//
// // let getRandomMeal = () => {
// //   let data = null;
// //   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
// //     .then(function (response,) {
// //       return (
// //         response.json()
// //       )
// //     }).then(function (myJson) {
// //     data = myJson;
// //     return data;
// // };
//
// function getRandomMeal () {
//   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then(function (response,) {
//       return (
//         response.json()
//       )
//     }).then(function (myJson) {
//     let data = myJson;
//     data = data.meals[0];
//     let result = null;
//     let strIngredients = Object.entries(data).filter((item) => {
//       return item[0].includes('strIngredient') && item[1]
//     });
//
//     strIngredients.sort(function (a, b) {
//       return parseInt(a[0].replace('strIngredient', '')) - parseInt(b[0].replace('strIngredient', ''));
//     });
//
//     let strMeasures = Object.entries(data).filter((item) => {
//       return item[0].includes('strMeasure')
//     });
//     strMeasures.sort(function (a, b) {
//       return parseInt(a[0].replace('strMeasure', '')) - parseInt(b[0].replace('strMeasure', ''));
//     });
//
//     result = strIngredients.map((item, i) => {
//
//       let pointerToMeasurement = ('strMeasure' + (i + 1));
//       return {ingredient: item[1], measurement: data[pointerToMeasurement]};
//     });
//     return result;
//   });
// }
//
// let ingredientArray = [];
// let newArray = getRandomMeal().bind(this);
// console.log(newArray);
//
// for (let i = 0; i < 4; i++) {
//
// }
//
// export default random;