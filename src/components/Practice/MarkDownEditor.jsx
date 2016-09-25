import React from 'react';

class MarkDownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.rawMarkUp = this.rawMarkUp.bind(this);
    this.state = {
      value: 'Type some *markdown* here!'
    };
  }
  handleChange() {
    this.setState({value: this.refs.textarea.value});
  }
  rawMarkUp() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }
  render() {
    return (
      <div className="MarkDownEditor">
       <h3>Input</h3>
       <textarea onChange={this.handleChange} ref="textarea" defaultValue={this.state.value} />
       <h3>Output</h3>
       <div className="content" dangerouslySetInnerHTML={this.rawMarkUp()}/> 
     </div> 
    );
  }
}

module.exports = MarkDownEditor;
