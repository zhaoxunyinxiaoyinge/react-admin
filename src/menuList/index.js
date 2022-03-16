import {
    BarChartOutlined,
    ContainerOutlined,
    UserAddOutlined,
  } from "@ant-design/icons";
  import React  from "react";

export  const list= [
    {
        title:"首页",
        pathname:"/welcome",
        icon:<ContainerOutlined/>
    },
    {
        title:"分页组件",
        pathname:"/pagepation",
        icon:<ContainerOutlined/>
    },{
        title:"svg组件",
        pathname:"/svg-group",
        icon:<ContainerOutlined/>,
    },
    {
        title:"系统设置",
        pathname:"/stylem",
        icon:<ContainerOutlined/>,
        children:[
            {
                title:"用户管理",
                pathname:"/stylem/user",
                icon:<ContainerOutlined/>
            },

            {
                title:"角色管理",
                pathname:"/stylem/roles",
                icon:<ContainerOutlined/>
            },

            {
                title:"菜单管理",
                pathname:"/stylem/menu",
                icon:<ContainerOutlined/>
            },

            {
                title:"字典管理",
                pathname:"/stylem/dictor",
                icon:<ContainerOutlined/>
            }
        ]
    },


]