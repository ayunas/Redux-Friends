import React from 'react';
import {login} from './actions';
import {connect} from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : ''
        }
    }

    input = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div>
                <input placeholder='username' name='username' type='text' 
                value={this.state.username} onChange={this.input} /><br/>
                <input placeholder='password' name='password' type='password' 
                value={this.state.password} onChange={this.input} /><br/>
                <button onClick={(e) => this.props.login(e.target)}>Enter My Friends!</button>
            </div>
          )
    }
}


export default connect(null,{login})(Login);
