import React, {Component} from "react";
import {ServerDate} from "./server-date";
import {ListWrapper} from "./list-wrapper";


export class Main extends Component {

    render() {

        return (
            <div>
                <ServerDate />
                <ListWrapper />
            </div>
        );
    }
}
