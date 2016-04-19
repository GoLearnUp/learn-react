import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.state = {
      boosh: 'nozel',
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    if (this.state.boosh === 'nozel'){
      this.setState({boosh: 'face'})
    }else{
      this.setState({boosh: 'nozel'})
    }
  }

  render() {
    return <div>
      <button onClick={this.onClick}>{this.state.boosh}</button>
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementsByTagName('main')[0]);
