import { connect } from 'react-redux';
import { Display } from '../../components/Display';

export default connect(
  state => ({
    text: state.textReducers.text
  }),
  null
)(Display);
