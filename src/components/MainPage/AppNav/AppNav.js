import React from 'react';
import { Link } from 'react-router-dom';
import './AppNav.css';

class AppNav extends React.Component {
    render() {
        return (
            <div className="AppNav">
                <ul className="nav_menu">
                    <Link to="/"><li className='nav_item'>Login</li></Link>
                    <Link to="/main"><li className='nav_item'>Main</li></Link>
                    <Link to="/admin"><li className='nav_item'>Streamers Page</li></Link>
                </ul>
            </div>
        )
    }
}

export default AppNav;