import {Component} from 'react';


export class ListItem extends Component {

    render() {
        const {itemStyle, data, handleClick, highlightId} = this.props;
        return (
            <div className={highlightId === data.id ? 'highlight-item' :''} style={itemStyle} onClick={handleClick}>{data.name_code}</div>
        )
    }

}