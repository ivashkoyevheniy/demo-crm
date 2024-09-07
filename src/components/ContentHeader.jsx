import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function ContentHeader(props) {
  const { title, actions, style } = props;

  return (
    <div style={{ display: "flex", justifyContent: "space-between", ...style }}>
      <Title level={2} style={{ margin: 0, fontWeight: "bold", lineHeight: 1 }}>
        {title}
      </Title>
      {actions ? actions : null}
    </div>
  );
}

export default ContentHeader;
