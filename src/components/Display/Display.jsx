import React from "react"
import {ImageBlock} from "../ImageBlock"

class Display extends React.Component {
    render() {
        return (
            <div id="displayArea">{this.props.values.split('').filter(word => !word.match(/[\s]/gi)).map(word => <ImageBlock word={word}/>)}</div>
        )
    }
}

export {Display}