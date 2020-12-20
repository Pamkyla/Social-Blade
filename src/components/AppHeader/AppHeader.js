import React from 'react';

import './AppHeader.css';

import avatar from './boom.jpg';

class AppHeader extends React.Component {
    render() {

        return (
            <div className="AppHeader">
                <div className="user_block">
                    <img className="user_avatar" src={avatar} alt="Avatar" />
                    <div className="user_info_block">
                        <div className="user_name">
                            <h2>CS:GO BEST MOMENTS</h2>
                            <div className="user_badge">
                                <i><img src="https://img.icons8.com/dotty/20/000000/widgetsmith.png" alt="badge"/></i>
                                <i><img src="https://img.icons8.com/dotty/20/000000/widgetsmith.png" alt="badge"/></i>
                                <i><img src="https://img.icons8.com/dotty/20/000000/widgetsmith.png" alt="badge"/></i>
                            </div>
                        </div>
                        <div className="info_menu">

                            <button className="like info_block"><img src="https://img.icons8.com/wired/30/000000/like.png" alt="badge"/></button>

                            <div className="info_block">
                                <p>Uploads</p>
                                <span>864</span>
                            </div>
                            <div className="info_block">
                                <p>Subsribers</p>
                                <span>434K</span>
                            </div>
                            <div className="info_block">
                                <p>Video Views</p>
                                <span>864</span>
                            </div>
                            <div className="info_block">
                                <p>Country</p>
                                <span>RU</span>
                            </div>
                            <div className="info_block">
                                <p>Channel Type</p>
                                <span>Games</span>
                            </div>
                            <div className="info_block">
                                <p>User Created</p>
                                <span>864</span>
                            </div>
                            <button className ="partnership_btn">Apply for YouTube Partnership</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}







export default AppHeader;