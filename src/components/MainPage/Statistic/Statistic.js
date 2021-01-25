import React from 'react';

import './Statistic.css';

import StatisticItem from '../StatisticItem';
import StatsService from '../../../services/StatsService';

class Statistic extends React.Component {

    service = new StatsService();

    state = {
        Data: [],
        nickname: this.props.nickname,
        num: 1
    };

    componentDidMount = async () => {
        const nickname = this.state.nickname.nickname;
        const user_data = await this.service.getUser(`${nickname}`);
        this.setState({ Data: user_data });
    }
 
    render() {

        const Data = this.state;
        const userData = Data.Data;
        const { notificationPerMonth } = userData;
        const i = notificationPerMonth;

        if (i === undefined) {
            return (
                <>
                    Loading...
                </>
            )
        }

        const data = notificationPerMonth.data;

        const elements = data.map((element) => { 
        const key = element.sentTo[0].message_id;

            return (
                <div key={key} className="statistic_block_item">
                    <StatisticItem
                        element={element}
                    />
                </div>
            );
        });

        return (
            <div className="Statistic">
                <div className="statistic">
                    <h2>Notification</h2>
                    <div className="statistic_block">
                        {elements}
                    </div>
                </div>
            </div>
        )
    }
}

export default Statistic;