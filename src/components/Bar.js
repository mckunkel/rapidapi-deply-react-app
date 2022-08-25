import React from 'react';
import { ReactComponent as UpArrow } from '@trv-ebus/tds-icons/dist/assets/icons/functional/svg/arrow-up-1-24.svg';
import { TdsButton } from '@trv-tds/react';

class Bar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount || 0,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState((currentState) => {
      return { count: currentState.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <div>Counter: {this.state.count}</div>
        <TdsButton id="bar" variant="primary" onClick={this.handleOnClick}>
          Increment
          <UpArrow
            className="tds-button__icon"
            style={{ marginLeft: '10px' }}
          />
        </TdsButton>
      </div>
    );
  }
}

export default Bar;
