import React from 'react';
import FooBarReduxActions from '../actions/FooBarRedux';
import FooBarRedux from '../containers/FooBarRedux';
import { TdsButton } from '@trv-tds/react';

function ReduxExample(props) {
  let inputRef = React.createRef();
  const handleOnClick = () => {
    props.dispatch(FooBarReduxActions.setText(inputRef.current.value));
  };

  return (
    <div>
      <h4>Redux Example</h4>
      <div className="tds-mb-m">
        <div className="tds-h5">Displaying the Redux state</div>
        <FooBarRedux />
      </div>
      <div className="tds-h5">Modifying the Redux state</div>
      <div className="tds-field">
        <label className="tds-field__label">
          Redux Text
          <input className="tds-field__input" ref={inputRef}></input>
        </label>
      </div>
      <TdsButton variant="primary" onClick={handleOnClick}>Set Redux Text</TdsButton>
    </div>
  );
}

export default ReduxExample;
