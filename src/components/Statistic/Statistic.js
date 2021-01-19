import React from 'react';

import './Statistic.css';

import StatisticItem from '../StatisticItem';

class Statistic extends React.Component {
    render() {

        const Data = this.props;
        const Data_local = Data.Data;
        const { notificationPerMonth } = Data_local;
        const i = notificationPerMonth;

        if (i == undefined) {
            return (
                <>
                    Loading...
                </>
            )
        }

        const data = notificationPerMonth.data;

        const elements = data.map((element) => {
            return (
                <div key={element} className="statistic_block_item">
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