import React, {Component} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import MealView from './Components/MealView'
import MealCategories from './Components/MealCategories'

class App extends Component {


  fetchMealData() {
    ReactDOM.render(<Preloader/>, document.getElementById('content'));
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((resp) => resp.json())
      .then(function (data) {
        ReactDOM.render(<MealView data={data}/>, document.getElementById('content'))
      })
  }



  componentWillMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((resp) => resp.json())
      .then(function (data) {
        ReactDOM.render(<MealCategories data={data} />, document.getElementById('content'))
      })
  }

  render() {
    //let preloader = this.state.isPreloader ? <Preloader/> : ''
    return (
      <div className="App" id={'App'}>
        <div id="content">
          <h1>What I'm going to eat today?!</h1>
          {/*<button onClick={this.fetchMealData.bind(this)}>Feed me please!</button>*/}
        </div>
      </div>
    );
  }
}
function Preloader (props) {
  return (<div>Please wait.</div>)
}

export default App;