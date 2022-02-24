import React from "react"
import Login from "./../login/login";
import NotFound from "./../components/notFound";
import { Danboard, User, Ts, Js } from "./../views";
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
  },
];

const danyRoute = [
  {
    pathname: "/admin/danborad",
    component: Danboard,
    title: "面板",
    icon: <BarChartOutlined/>,
  },

  {
    pathname: "/admin/subject",
    title: "树形组件",
    icon: <ContainerOutlined/>,
    children: [
      {
        pathname: "/admin/subject/ts",
        component: Ts,
        title: "图标字体",
      },
      {
        pathname: "/admin/subject/js",
        component: Js,
        title: "跑马灯",
      },
    ],
  },

  {
    pathname: "/admin/user",
    component: User,
    title: "用户个人信息",
    icon: <UserAddOutlined/>,
  },
];

export { baseRouter, danyRoute };
