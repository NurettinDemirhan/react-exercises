import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue
    };
  }

  componentDidMount() {
    const { incrementAmount, incrementInterval } = this.props;
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + incrementAmount });
    }, incrementInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

export default Counter;