import React, { memo } from "react";

export const ListItem = memo((props) => {
  const { itemStyle, data, handleClick:handleClick_props } = props;
  handleClick = () => {
    console.log(data);
    handleClick_props(data.id);
  };

  return (
    <div style={itemStyle} onClick={handleClick}>
      {data.name_code}
    </div>
  );
});
