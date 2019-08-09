import React from "react";
class Login extends React.Component {
    state = {
        name: 'zhangzhenya'
    };
    render() {
        return (<div className='aber'>
            {this.state.name}
            {this.props.children}
        </div>);
    }
}
export default Login;