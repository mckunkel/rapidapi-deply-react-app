import { connect } from 'react-redux';
import FooBarRedux from '../components/FooBarRedux';

const mapStateToProps = (state) => {
  return {
    text: state.FooBarRedux.text
  };
};

export default connect(
  mapStateToProps
)(FooBarRedux);
