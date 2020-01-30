import { handleActions } from 'redux-actions';
import { TextState } from '../constants/models';

const textReducers = handleActions(
  {
    SET_TEXT: (state, { payload }) => {
      return {
        text: payload
      };
    }
  },
  TextState
);

export default textReducers;
