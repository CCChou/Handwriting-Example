import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.onClickHandler = props.onClickHandler;
    this.getTextValue = this.getTextValue.bind(this);
  }

  getTextValue() {
    this.onClickHandler(this.state.text);
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="inputWord">請輸入要轉換的文字</label>
          <textarea
            className="form-control"
            id="inputWord"
            rows="5"
            onChange={e => this.setState({ text: e.target.value })}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          id="submitBtn"
          onClick={this.getTextValue}
        >
          轉換
        </button>
      </div>
    );
  }
}

TextArea.propTypes = {
  onClickHandler: PropTypes.func
};

export { TextArea };
