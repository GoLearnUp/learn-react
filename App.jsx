import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './TicTacToe.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.state = {
      boosh: 'nozel',
    }
  }

  render() {
    return <div>
      <TicTacToe />
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementsByTagName('main')[0]);
