import React from "react";
import { ContentHeader } from "../components";
import { List } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const data = [
  {
    title: "Joe Doe",
    uuid: "0000",
  },
];

function Applications() {
  return (
    <>
      <ContentHeader title="Applications" />
      <List
        itemLayout="horizontal"
        dataSource={data}
        style={{ marginTop: 16 }}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={
                <UserOutlined
                  style={{
                    border: "solid 1px rgba(0, 0, 0, 0.88)",
                    padding: 8,
                    borderRadius: "50%",
                  }}
                />
              }
              style={{ margin: 0 }}
              title={
                <NavLink
                  to={`${item.uuid}/`}
                >{`${item.title} ${item.uuid}`}</NavLink>
              }
              description={`${item.title} Application Desctiption`}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default Applications;
