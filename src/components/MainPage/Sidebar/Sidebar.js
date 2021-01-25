import React from 'react';

import './Sidebar.css';

import SidebarItem from '../SidebarItem';
import StatsService from '../../../services/StatsService';
import Loader from '../../../services/Loader';

class Sidebar extends React.Component {

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
        const { messagePerMonth } = userData;
        const i = messagePerMonth;

        if (i === undefined) {
            return (
                <>
                    <Loader />
                </>
            )
        }

        const data = messagePerMonth.data;
        const elements = data.map((element) => {
        const key = element.sentTo[0].message_id;
            return (
                <div key={key} className="sidebar_block_item">
                    <SidebarItem
                        element={element}
                    />
                </div>
            );
        });

        return (
            <aside className="Sidebar">
                <h2>Message</h2>
                {elements}
            </aside>
        )
    }
}

export default Sidebar;