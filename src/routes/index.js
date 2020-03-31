import {Admin,Board,Login,Settings,UserInfo,NotFounds,Goods,}  from "./../pages"
import React from "react"
import {
    sergroupAddOutlined,AreaChartOutlined,ShopOutlined,SettingOutlined,UsergroupAddOutlined
} from '@ant-design/icons';
const MapRouter=[
    {
       title:'登陆页',
       pathname:"/Login",
        exact:true,
      component:Login
    },{
        title:"NotFounds",
        exact:true,
        pathname:"/404",
        component:NotFounds
    }
]
const AdminRouter=[
    {
        title:"管理员",
        pathname:"/Admin/list",
        exact:true,
        component:Admin,
        icon:<UsergroupAddOutlined/>
    },
    {
        title:'仪表盘',
        pathname:"/Admin/Board",
        exact:true,
        component:Board,
        icon:<AreaChartOutlined/>
    },
    {
        title:'商品',
        pathname:"/Admin/Goods",
        exact:true,
        component:Goods,
        icon:<ShopOutlined/>
    },
    {
        title:'设置中心',
        pathname:"/Admin/Settings",
        exact:true,
        component:Settings,
        icon:<SettingOutlined/>
    }
]
export {
    MapRouter,
    AdminRouter
}

