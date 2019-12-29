import React from "react"

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.onClickHandler = props.onClickHandler;
        this.getTextValue = this.getTextValue.bind(this);
    }

    getTextValue() {
        this.onClickHandler(this.state.text);
    }

    render() {
        return (
            <div>
                <div class="form-group">
                    <label for="inputWord">請輸入要轉換的文字</label>
                    <textarea class="form-control" id="inputWord" rows="5" onChange={(e) => this.setState({text: e.target.value})}></textarea>
                </div>
                <button type="button" class="btn btn-secondary" id="submitBtn" onClick={this.getTextValue}>轉換</button>
            </div>
        )
    }
}

export {TextArea}