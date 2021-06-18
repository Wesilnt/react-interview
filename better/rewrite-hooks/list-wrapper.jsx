import React, { memo, useState, useEffect, useCallback } from "react";
import { fetch } from "@/fetch";
import { ListItem } from "./list-item";

const style = {
  display: "inline-block",
  // ...otherStyle
};

export const ListWrapper = memo(() => {
  const [list, setList] = useState([]);
  const [highlightId, setHighlightId] = useState("");

  const getList = useCallback(() => {
    fetch({ url: "getList" }).then((res) => {
      const { data: _list, success } = res;
      if (!success || !Array.isArray(_list)) return;
      const list = _list.reduce((prev, item) => {
        if (!item.enabled || parseInt(item.price, 10) <= 10) return prev;
        // code为空返回空字符串
        item.name_code = `${item.name}_(${item.code || ""})`;
        return prev;
      }, []);

      setList(list);
    });
  }, []);

  const handleClick = useCallback((id) => {
    setHighlightId(id);
  },[]);

  useEffect(() => {
    this.getList();
  }, []);

  return list.map((item) => (
    <ListItem
      key={item.id}
      className={highlightId === item.id ? "highlight-item" : ""}
      itemStyle={style}
      data={item}
      handleClick={this.handleClick}
    />
  ));
});
