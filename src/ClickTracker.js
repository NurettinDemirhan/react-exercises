import React from 'react';

class ClickTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastClickedButton: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const button = event.target.name;
    this.setState({
      lastClickedButton: button
    });
  }

  render() {
    return (
      <div>
        <h1>Last button clicked: {this.state.lastClickedButton}</h1>
        <button name="button1" onClick={this.handleClick}>Button 1</button>
        <button name="button2" onClick={this.handleClick}>Button 2</button>
        <button name="button3" onClick={this.handleClick}>Button 3</button>
      </div>
    );
  }
}

export default ClickTracker;