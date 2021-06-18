import React, {Component} from "react";
import {fetch} from '@/fetch'


export class ServerDate extends Component {

    IntervalID = '';

    state = {
        date: '',
    };

    componentDidMount() {
        this.getServerDate();
        this.IntervalID = setInterval(() => {
            this.getServerDate();
        }, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.IntervalID);
        this.IntervalID = ''
    }

    getServerDate = () => {
        fetch({url: "getServerDate"}).then((res) => {
            const {data: date, success} = res;
            if (!success) return
            this.setState({date});
        });
    }


    render() {

        const {date} = this.state;

        return date;
    }
}
