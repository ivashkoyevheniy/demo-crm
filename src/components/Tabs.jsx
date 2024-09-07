import React from "react";
import { Tabs as AntTabs } from "antd";

function Tabs(props) {
  const { items, childrens, onChange, ...otherProps } = props;

  const getTabs = () =>
    items.map((label, index) => ({
      label,
      key: index.toString(),
      children:
        childrens && childrens[index]
          ? childrens[index](label)
          : `Content of Tab ${label}`,
    }));

  return (
    <AntTabs
      onChange={(tab) => onChange && onChange(tab)}
      items={getTabs(items)}
      {...otherProps}
    />
  );
}

export default Tabs;
