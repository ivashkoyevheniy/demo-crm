import React from "react";
import { Breadcrumb as AntBreadcrumb } from "antd";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

function Breadcrumb() {
  const { pathname } = useLocation();
  const { uuid } = useParams();

  const breadcrumb = [
    {
      title: uuid ? (
        <NavLink to={pathname.replace(`${uuid}/`, "")}>
          <ArrowLeftOutlined />
          {` All ${pathname.split("/")[1]}`}
        </NavLink>
      ) : (
        `All ${pathname.split("/")[1]}`
      ),
    },
  ];

  return <AntBreadcrumb items={breadcrumb} />;
}

export default Breadcrumb;
