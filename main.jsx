import { Component } from "react";
import { fetch } from "@/fetch";
import { ListItem } from "./list-item";

export class Main extends Component {
  state = {
    list: [],
    date: "",
    highlightId: "",
  };

  componentDidMount() {
    this.getList();
    setInterval(() => {
      this.getServerDate();
    }, 4000);
  }

  getServerDate() {
    fetch({ url: "getServerDate" }).then(({ data: date }) => {
      this.setState({ date });
    });
  }

  getList() {
    fetch({ url: "getList" }).then(({ data: _list }) => {
      const list = _list
        .filter((item) => item.enabled && parseInt(item.price) > 10)
        // code为空返回空字符串
        .map((item) => ({
          ...item,
          name_code: `${item.name}_(${item.code && item.code})`,
        }));
      this.setState({ list });
    });
  }

  handleClick(item) {
    console.log(item);
    this.setState({
      highlightId: item.id,
    });
  }

  render() {
    const style = {
      display: "inline-block",
      // ...otherStyle
    };

    return (
      <div>
        {this.state.date}
        {this.state.list.map((item) => (
          <ListItem
            highlightId={this.state.highlightId}
            itemStyle={style}
            data={item}
            handleClick={(item) => this.handleClick(item)}
          />
        ))}
      </div>
    );
  }
}
