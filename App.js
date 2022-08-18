import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
const App = () => {
    return ( <
        div >
        <
        Switch >
        <
        Router exact path = '/'
        component = { Login }
        /> <
        /Switch> <
        /div>
    )

}
export default App;