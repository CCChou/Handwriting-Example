import React from "react"

class ImageBlock extends React.Component {
    render() {
        return (
            <img id="img_show" src={'http://write.phc.edu.tw//draw.php?' + this.props.word} border="0" width="200" height="200"/>
        )
    }
}

export {ImageBlock}