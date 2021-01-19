import React from 'react';

import './StatisticItem.css';

class StatisticItem extends React.Component {
    render() {
        const { element } = this.props;
        return (
            <>
                    <span>{element.caption}</span>
                    <p>{element.date}</p>
            </>
        )
    }
}

export default StatisticItem;