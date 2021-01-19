import React from 'react';

import { Link } from 'react-router-dom';

import './LoginPage.css';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="LoginPage">
                <form>
                    <input type='text'></input>
                    <input type='password'></input>
                    <Link to="/App"><button type='submit'>Submit</button></Link>
                </form>
            </div>
        )
    }
}

export default LoginPage;