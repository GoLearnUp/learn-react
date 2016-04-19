import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './TicTacToe.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clickCounts: [0,0,0,0],
    }
  }
  onButtonClick(buttonIndex){
    this.state.clickCounts[buttonIndex]++;
    debugger
    this.setState({
      clickCounts: this.state.clickCounts,
    });
  }
  render() {
    var sum = (
      this.state.clickCounts[0] +
      this.state.clickCounts[1] +
      this.state.clickCounts[2] +
      this.state.clickCounts[3]
    )
    return <div>
      <div>sum count: {sum}</div>
      <ClickCountingButton clickCount={this.state.clickCounts[0]} onClick={this.onButtonClick.bind(this, 0)} color="red" />
      <ClickCountingButton clickCount={this.state.clickCounts[1]} onClick={this.onButtonClick.bind(this, 1)} color="red" />
      <ClickCountingButton clickCount={this.state.clickCounts[2]} onClick={this.onButtonClick.bind(this, 2)} color="red" />
      <ClickCountingButton clickCount={this.state.clickCounts[3]} onClick={this.onButtonClick.bind(this, 3)} color="red" />
    </div>
  }
}

class ClickCountingButton extends React.Component {
  static propTypes = {
    clickCount: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
  }
  render(){
    var styles = {
      backgroundColor: this.props.color,
    }
    return <button style={styles} onClick={this.props.onClick}>{this.props.clickCount}</button>
  }
}

ReactDOM.render(<App/>, document.getElementsByTagName('main')[0]);
ReactDOM.render(<App/>, document.getElementsByTagName('main')[1]);

