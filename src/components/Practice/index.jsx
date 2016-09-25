import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import ToDoList from './ToDoList';
import MarkDownEditor from './MarkDownEditor';
import UserGithub from './UserGithub';

const divStyle = {
  color: 'red'
};

const lists = ['JavaScript', 'Java', 'Node', 'Python'];

class HelloMessage extends React.Component {
  constructor(props) {
    // ES6 的語法上，骨子裡還是 prototype based 物件導向語言。 透過 extends 可以繼承 React.Component 父類別。
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }
  handleClick() {
    this.setState({'name': 'LBJones'});
  }
  componentWillMount() {
    console.log('componentWillMount');
  } 
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state;
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <div style={divStyle}>
        <ul>
          {lists.map((result, index) => {
            return (<li key={index}>{result}</li>)
          })}
        </ul>
        <div>
          <h1>Hello {this.props.name}</h1>
          <div onClick={this.handleClick}>Hi, {this.state.name}</div>
        </div>
        <Timer />
        <ToDoList />
        <MarkDownEditor />
        <UserGithub source="https://api.github.com/users/torvalds" />
      </div>
    );
  }
}

// PropTypes 驗證，若傳入的 Props type 不是 string 將會顯示錯誤
HelloMessage.propTypes = {
  name: React.PropTypes.string
};

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值 Jones。用法等於 ES5 的 getDefaultProps
HelloMessage.defaultProps = {
  name: 'Jones'
}

export default HelloMessage;
//ReactDOM.render(<HelloMessage />, document.getElementById('app'));
