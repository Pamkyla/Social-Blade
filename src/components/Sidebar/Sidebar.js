import React from 'react';

import './Sidebar.css';

import image from '../AppHeader/boom.jpg'
import SidebarItem from '../SidebarItem';

class Sidebar extends React.Component {
    render() {
        
        const Data = this.props;
        const Data_local = Data.Data;
        const { messagePerMonth } = Data_local;
        const i = messagePerMonth;

        if (i == undefined) {
            return (
                <>
                    Loading...
                </>
            )
        }

        const data = messagePerMonth.data;
        const elements = data.map((element) => {
            return (
                <div key={element} className="sidebar_block_item">
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