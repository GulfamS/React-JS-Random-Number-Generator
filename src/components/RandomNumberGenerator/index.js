import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getNumbers = () => Math.ceil(Math.random() * 100)

  onGenerateBtn = () => {
    const randomNumber = this.getNumbers()
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="number-card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onGenerateBtn}
            >
              Generate
            </button>
            <p className="number">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
