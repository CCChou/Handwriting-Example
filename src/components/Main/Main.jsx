import React from 'react';
import { Title } from '../Title';
import { TextArea } from '../TextArea';
import { Display } from '../Display';

const title = '硬筆字練習';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.passValue = this.passValue.bind(this);
  }

  passValue(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div className="container">
        <br />
        <Title name={title} />
        <br />
        <TextArea onClickHandler={this.passValue} />
        <br />
        <br />
        <Display values={this.state.text} />
      </div>
    );
  }
}

export { Main };
