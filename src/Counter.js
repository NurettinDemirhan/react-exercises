import React from 'react';
import CounterDisplay from './CountDisplay';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue
    };
  }
//its already working like that
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
    return <CounterDisplay countStart={this.state.count}/>;
  }
}

export default Counter;