import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {
    constructor() {
      super();

      this.state = {
        todoItems: [],
        done: false
      }
    }
    render() {
      return(
        <h1>Hello World!</h1>
      )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'))
