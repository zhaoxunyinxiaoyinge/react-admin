import {Admin,Board,Login,Settings,UserInfo,NotFounds,Goods,AdminUpdate}  from "./../pages"
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
        icon:<UsergroupAddOutlined/>,
        isNav:true
    },
    {
        pathname:"/Admin/update",
        exact:true,
        component:AdminUpdate,
        isNav:false
    },
    {
        title:'仪表盘',
        pathname:"/Admin/Board",
        exact:true,
        component:Board,
        icon:<AreaChartOutlined/>,
        isNav:true
    },
    {
        title:'商品',
        pathname:"/Admin/Goods",
        exact:true,
        component:Goods,
        icon:<ShopOutlined/>,
        isNav:true
    },
    {
        title:'设置中心',
        pathname:"/Admin/Settings",
        exact:true,
        component:Settings,
        icon:<SettingOutlined/>,
        isNav:true
    }
]
export {
    MapRouter,
    AdminRouter
}

