import React from 'react';
import { ReactComponent as Logo } from '../../assets/pañol.jpg'
class Login extends React.Component {
    state = {
        email: '',
        pwd: ''
    }

    handlechange = (e) => {
        const { name, value } = e.targey
        this.setState({
            [name]: value
        })


    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return ( <
            div >
            <
            div >
            <
            logo / >
            <
            /div> <
            div >
            <
            form onSubmit = { this.handleSubmit } >
            <
            imput type = 'email'
            name = 'email'
            placeholder = 'email...'
            required onChange = { this.handlechange }
            />      <
            imput type = 'password'
            name = 'pwd'
            placeholder = 'password...'
            required onChange = { this.handlechange }
            />    <
            button onSubmit > Log In < /button>      <
            /form> <
            /div> <
            /div>

        )
    }
}

export default Login;