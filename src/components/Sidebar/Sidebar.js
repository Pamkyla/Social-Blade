import React from 'react';

import './Sidebar.css';

import image from '../AppHeader/boom.jpg'

class Sidebar extends React.Component {
    render() {
        return (
            <aside className="Sidebar">
                <div className="sidebar_item">
                    <img className="sidebar_image" src={image}></img>
                </div>
                <div className="sidebar_item">
                    <img className="sidebar_image" src={image}></img>
                </div>
            </aside>
        )
    }
}

export default Sidebar;