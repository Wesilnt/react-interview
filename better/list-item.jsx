import React, {PureComponent} from 'react';


export class ListItem extends PureComponent {
    handleClick = () => {
        const {data, handleClick} = this.props;
        console.log(data);
        handleClick(data.id)
    }

    render() {
        const {itemStyle, data} = this.props;
        return (
            <div style={itemStyle} onClick={this.handleClick}>{data.name_code}</div>
        )
    }

}