import React from 'react';

class StreamersItem extends React.Component {



render () {
    const { element } = this.props;



    return (
        <>
            <span className="streamer-item" >{element}</span> 
        </>
    )
}
}

export default StreamersItem;