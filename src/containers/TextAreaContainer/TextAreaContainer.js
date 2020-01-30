import { connect } from 'react-redux';
import { TextArea } from '../../components/TextArea';
import { setText } from '../../actions/textActions';

export default connect(null, dispatch => ({
  onClickHandler: text => {
    dispatch(setText(text));
  }
}))(TextArea);
