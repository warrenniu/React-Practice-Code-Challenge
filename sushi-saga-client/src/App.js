import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!

class App extends Component {

state = {
  arrayOfSushi: [],
  removedSushi: [],
  budget: 100
}

componentDidMount(){
  fetch('http://localhost:3000/sushis')
  .then(r => r.json())
  .then(sushiArray => {
    // console.log(sushiArray)
    this.setState ({ arrayOfSushi: sushiArray})
  })
}

sushiClickHandler = (sushiObj) => {
  // console.log("Inside the App", sushiObj)
  if (sushiObj.price < this.state.budget){
    this.setState({ removedSushi: [...this.state.removedSushi, sushiObj] }),
    this.setState(({ budget: this.state.budget - sushiObj.price }))
  } else {
    alert("you to broke for that fish")
  }
}


render() {
  console.log(this.state.budget)
  return (
    <div className="app">
      <SushiContainer clickHandler={this.sushiClickHandler} arrayOfSushi={this.state.arrayOfSushi}/>
      <Table budget={this.state.budget}removedSushi={this.state.removedSushi}/>
    </div>
  );
}
}

export default App;