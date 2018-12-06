import React, {Component} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import MealView from '../Components/MealView'

class App extends Component {

  pageMapDefault = [{name: 'Category', fun: this.showCategories.bind(this)}];

  componentWillMount() {
    this.setState({
      pageMap: this.getEmptyPageMap()
    })
  }

  getEmptyPageMap(){
    return this.pageMapDefault.slice()
  }

  openItemData(itemId) {
    let _this = this;
    ReactDOM.render(<Preloader/>, document.getElementById('content'));
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`)
      .then((resp) => resp.json())
      .then(function (data) {
        _this.state.pageMap.push({name: data.meals[0].strMeal, fun: null});
        ReactDOM.render(<MealDisplayed data={data} mainContext={_this}/>, document.getElementById('content'))
      })
  }

  componentDidMount() {
    this.showCategories()
  }

  showCategories() {
    let _this = this;
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((resp) => resp.json())
      .then((data) => {
        _this.state.pageMap = this.getEmptyPageMap();
        ReactDOM.render((<MealCategories mainContext={_this} data={data}/>), document.getElementById('content'))
      })
  }


  render() {
    //let preloader = this.state.isPreloader ? <Preloader/> : ''
    return (
      <div className="App">
        <h1>What I'm going to eat today?!</h1>
        <div id="content">
          <div>Please wait</div>
        </div>
      </div>
    );
  }
  openCategeryList(listName) {
    let _this = this;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${listName}`)
      .then((resp) => resp.json())
      .then((data) => {
        _this.state.pageMap.push({name: listName, fun: _this.openCategeryList.bind(this, listName)});
        ReactDOM.render((<MealCategories callFn={_this.openItemData} mainContext={_this}
                                         data={data}/>), document.getElementById('content'))
      })
  }
}
function PageMap(props) {
  const _this = props.state
  return (<div>||{_this.state.pageMap.map(val => {
    return (<button onClick={val.fun}>{val.name}</button>)
  })}||</div>)
}
function MealCategories(props) {
  const _this = props.mainContext;
  const data = props.data.categories || props.data.meals;
  return (<div>
    <PageMap state={_this}/>
    {data.map(item => {
      return (
        <div>
          <button
            onClick={props.callFn && props.callFn.bind(_this, item.idMeal) || _this.openCategeryList.bind(_this, (item.strCategory || item.strMeal))}>
            {item.strCategory || item.strMeal}
          </button>
        </div>)
    })}
  </div>)
}
function Preloader(props) {
  return (<div>Please wait.</div>)
}
function MealDisplayed(props) {
  return (<div>
    <PageMap state={props.mainContext}/>
    <MealView data={props.data}/>
  </div>)
}
export default App;