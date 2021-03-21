import React from 'react';

import './StreamersPage.css';
import { Link } from 'react-router-dom';
import StreamersItem from './StreamersItem';
import Loader from '../../services/Loader';

class StreamersPage extends React.Component {

    state = {
        Streamers: []
    };

    componentDidMount() {
        const URL = "http://localhost:4000/getNickname";


        fetch(URL).then(res => res.json()).then(json => {
            this.setState({ Data: json });
        });
    }

    render() {
        const arr = this.state;
        const nicknameList = arr.Data;
        const changeNickname = this.props;
        if (nicknameList === undefined) {
            return (
                <>
                   <Loader />
                </>
            )
        }

        const data = nicknameList.nickname;

        let handleSubmit = (event) => {
            console.log();
            this.props.changeNickname(`${event.target.innerHTML}`);
        }

        const elements = data.map((element) => {
            return (
                <Link to="/main">
                    <li key={1} className="streamers_block_item" onClick={handleSubmit}>
                        <StreamersItem
                            element={element}
                            changeNickname={changeNickname}
                        />
                    </li>
                </Link>
            );
        });

        return (
            <div className="streamers">
                <h2>Streamers</h2>
                <ul className="streamers_block">
                    {elements}
                </ul>
            </div>
        )
    }
}

export default StreamersPage;