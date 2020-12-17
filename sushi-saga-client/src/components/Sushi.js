import React, { Fragment } from 'react'

class Sushi extends React.Component{


  state = {
    beenClicked: false
  }

  localClickHandler = () => {
    return this.props.clickHandler(this.props.sushiObj)
  }

  localImageToggle = () => {
    if(this.state.beenClicked === false){
      this.setState({ beenClicked: true})
    }
  }

  render(){

    return (
      <div className="sushi" onClick={this.localImageToggle}>
        <div className="plate" 
             onClick={this.localClickHandler}>
          { 
            this.state.beenClicked === true 
            ?
              null
            :
              <img src={this.props.sushiObj.img_url} width="100%" alt="sushi"/>
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushiObj.name} - ${this.props.sushiObj.price}
        </h4>
      </div>
    )
  }
}

export default Sushi