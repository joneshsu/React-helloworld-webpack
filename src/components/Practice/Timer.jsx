import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    // 與 ES5 React.createClass({}) 不同的是 component 內自定義的方法需要自行綁定 this context
    // 或是使用 arrow function
    this.tick = this.tick.bind(this);
    this.state = {
      secondsElapsed: 0
    };
  }
  
  // 累加器方法，每一秒被呼叫後就會使用 setState() 更新內部 state，讓 Component 重新 render
  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }

  // componentDidMount 為 component 生命週期中 component 已插入節點的階段
  // 通常會將非同步操作都會放置這個階段
  // 每1秒鐘會去呼叫 tick 方法
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  // componentWillUnmount 為 component 生命週期中 component 即將移出插入節點的階段
  // 移除掉 interval 方法
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // render 為 class Component 中唯一需要定義的方法，其回傳 component 欲顯示的內容
  render() {
    return (
      <div> Seconds Elapsed: {this.state.secondsElapsed}</div> 
    ); 
  }
}

module.exports = Timer;
