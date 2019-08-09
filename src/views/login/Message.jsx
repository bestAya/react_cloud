import React from "react";
class Message extends React.Component {
    state = {
        name: '1111111'
    };
    render() {
        return (<div className ='aber'>{this.state.name}</div>);
    }
}
export default Message;