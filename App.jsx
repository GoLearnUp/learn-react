import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './TicTacToe.jsx';

class App extends React.Component {
  render() {
    return <div>
      <TicTacToe />
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementsByTagName('main')[0]);
