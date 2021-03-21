import React from 'react';

class SpreadsheetItem extends React.Component {

    render() {
        const { element } = this.props;
        return (
            <>
                <td className="SpreadsheetItem">
                    {element}
                </td>
                <td className="SpreadsheetItem">
                    {element}
                </td>
                <td className="SpreadsheetItem">
                    {element}
                </td>
                <td className="SpreadsheetItem">
                    {element}
                </td>
            </>

        );
    }
}

export default SpreadsheetItem;