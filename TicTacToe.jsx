import React from 'react';
import ReactDOM from 'react-dom';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.state = {
      spaces: [
        null,null,null,
        null,null,null,
        null,null,null,
      ]
    }
  }

  render() {
    return <div>
      <button onClick={this.onClick}>{this.state.boosh}</button>
    </div>
  }
}


class TicTacToe extends React.Component {
