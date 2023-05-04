import React from 'react';
import Welcome from './Welcome';

class InteractiveWelcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="name-input">Enter your name: </label>
        <input id="name-input" type="text" value={this.state.name} onChange={this.handleInputChange} />
        <Welcome name={this.state.name} />
      </div>
    );
  }
}

export default InteractiveWelcome;