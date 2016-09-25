import React from 'react';

class UserGithub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      githubUrl: '',
      avatarUrl: ''
    };
  }
  componentWillMount() {
    $.get(this.props.source, (result) => {
      const data = result;
      if (data) {
        this.setState({username: data.name, githubUrl: data.html_url, avatarUrl: data.avatar_url});
      }
    });
  }
  render() {
    return (
      <div>
        <h3>{this.state.username}</h3>
        <img src={this.state.avatarUrl} />
        <a href={this.state.githubUrl}> Github Link</a>.
      </div>
    );
  }
}

module.exports = UserGithub;
