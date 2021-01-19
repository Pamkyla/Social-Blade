import React from 'react';
import { Link } from 'react-router-dom';
import './AppNav.css';

class AppNav extends React.Component {
    render() {
        return (
            <div className="AppNav">
                <ul className="nav_menu">
                    <Link to="/"><li className='nav_item'>Login</li></Link>
                    <Link to="/App"><li className='nav_item'>Main</li></Link>
                    <li className='nav_item'>Statistic</li>
                    <li className='nav_item'>Spreadsheet</li>
                </ul>
            </div>
        )
    }
}

export default AppNav;