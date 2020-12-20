import React from 'react';

import './Statistic.css';

class Statistic extends React.Component {
    render() {
        return (
            <div className="Statistic">
                <div className="statistic">
                    <div className="grade_block">
                        <h2>B</h2>
                        <p>Total Grade</p>
                    </div>
                    <div className="statistic_block">
                        <div className="statistic_block_item">
                            <span>36,003rd</span>
                            <p>SOCIAL BLADE RANK</p>
                        </div>
                        <div className="statistic_block_item">
                            <span>56,508th</span>
                            <p>SUBSCRIBER RANK</p>
                        </div>
                        <div className="statistic_block_item">
                            <span>36,848th</span>
                            <p>VIDEO VIEWS RANK</p>
                        </div>
                        <div className="statistic_block_item">
                            <span>2,308th</span>
                            <p>COUNTRY RANK </p>
                        </div>
                        <div className="statistic_block_item">
                            <span>6,464th</span>
                            <p>GAMES RANK</p>
                        </div>
                    </div>
                </div>

                <div className="content_block">
                    <div className="content_block_item">
                        <span>10K </span>
                        <p>SUBSCRIBERS FOR THE LAST 30 DAYS</p>
                    </div>
                    <div className="content_block_item">
                        <span>$1.3K - $21.5K</span>
                        <p>ESTIMATED MONTHLY EARNINGS</p>
                    </div>
                    <div className="content_block_item">
                        <span>5.365M</span>
                        <p>VIDEO VIEWS FOR THE LAST 30 DAYS</p>
                    </div>
                </div>
                <div className="content_block">
                    <div className="content_block_item">
                        <span>3</span>
                        <p>smth</p>
                    </div>
                    <div className="content_block_item">
                        <span>$16.1K - $257.5K</span>
                        <p>ESTIMATED YEARLY EARNINGS</p>
                    </div>
                    <div className="content_block_item">
                        <span>3</span>
                        <p>smth</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Statistic;