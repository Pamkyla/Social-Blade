import React from 'react';
import Loader from '../../../services/Loader';
import StatsService from '../../../services/StatsService';

import './AppHeader.css';

import avatar from './boom.jpg';

class AppHeader extends React.Component {

    service = new StatsService();

    state = {
        Data: [],
        nickname: this.props.nickname
    };

    componentDidMount = async () => {
        const nickname = this.state.nickname.nickname;
        const user_data = await this.service.getUser(`${nickname}`);
        this.setState({ Data: user_data });
    }

    render() {

        const Data = this.state;
        const userData = Data.Data;
        const nickname = this.state.nickname.nickname;
        const { totalSubs } = userData;

        if (totalSubs === undefined) {
            return (
                <>
                   <Loader />
                </>
            )
        }

        return (
            <div className="AppHeader">
                <div className="user_block">
                    <img className="user_avatar" src={avatar} alt="Avatar" />
                    <div className="user_info_block">
                        <div className="user_name">
                            <h2>{nickname}</h2>
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
                                <span>0</span>
                            </div>
                            <div className="info_block">
                                <p>Subsribers</p>
                                <span>{totalSubs}</span>
                            </div>
                            <div className="info_block">
                                <p>Video Views</p>
                                <span>0</span>
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
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}







export default AppHeader;