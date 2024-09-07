/* eslint-disable no-useless-concat */
import React from "react";
import { Grid, Steps } from "antd";

const { useBreakpoint } = Grid;

function PropgressBar(props) {
  const { items, current } = props;
  const screens = useBreakpoint();

  const _items = items.map((item) => ({
    title: (
      <span style={{ fontSize: 12 }}>
        {item.replace(/(.\s)/g, "$1" + "\n")}
      </span>
    ),
  }));

  return (
    <Steps
      size="small"
      style={{
        backgroundColor: "#F0F6FF",
        padding: screens.lg ? 24 : 6,
        margin: "16px 0",
        whiteSpace: "break-spaces",
      }}
      current={current - 1}
      labelPlacement="vertical"
      items={_items}
    />
  );
}

export default PropgressBar;
