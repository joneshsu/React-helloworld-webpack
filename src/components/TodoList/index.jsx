import React from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
      </div> 
    );
  }
}

export default App;
