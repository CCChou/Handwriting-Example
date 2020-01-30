import React from 'react';
import { Title } from '../Title';
import TextAreaContainer from '../../containers/TextAreaContainer';
import DisplayContainer from '../../containers/DisplayContainer';

const title = '硬筆字練習';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <br />
        <Title name={title} />
        <br />
        <TextAreaContainer />
        <br />
        <br />
        <DisplayContainer />
      </div>
    );
  }
}

export { Main };
