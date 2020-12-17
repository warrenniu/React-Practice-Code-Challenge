import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    start: 0,
    limit: 4
  }
  renderSushiItem = () => {
    let sushi = this.props.arrayOfSushi.slice(this.state.start, this.state.limit)
    return sushi.map(sushiEl => {
      return <Sushi key={sushiEl.id} sushiObj={sushiEl} clickHandler={this.props.clickHandler} />
    })
  }

  showNextSushi = () => {

    this.setState({start: this.state.start +4, limit: this.state.limit +4})
  }

  render() {

    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushiItem()
          }
          <MoreButton showNextSushi={this.showNextSushi}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer