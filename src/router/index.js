import React from "react";
import Login from "./../login/login";
import NotFound from "./../components/notFound";

import {
  BarChartOutlined,
  ContainerOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const baseRouter = [
  {
    pathname: "/login",
    component: Login,
    exact: true,
  },
  {
    pathname: "/404",
    component: NotFound,
    exact: false,
  }
];

export { baseRouter };
