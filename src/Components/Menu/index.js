import React, {Component} from 'react';
import style from "./index.module.less"
import { AppstoreOutlined, MailOutlined,DownOutlined,
    sergroupAddOutlined,AreaChartOutlined,ShopOutlined,SettingOutlined
} from '@ant-design/icons';
import {withRouter} from "react-router-dom"
import { Menu,Layout, Dropdown,Avatar,Badge} from 'antd';
import {AdminRouter} from "./../../routes"
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
class Menus extends Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state = {
        openKeys: ['sub1'],
    };
    // onOpenChange = openKeys => {
    //     const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    //     if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //         this.setState({ openKeys });
    //     } else {
    //         this.setState({
    //             openKeys: latestOpenKey ? [latestOpenKey] : [],
    //         });
    //     }
    // };
    menut(arr){
       let arrs= arr.map(item=>{
            if(item.children){
                return(
                    <SubMenu
                        key="sub1"
                        title={
                        <span >
                            <MailOutlined />
                            <span>{item.title}</span>
                        </span>
                        }
                    >
                        {this.menu(item.children)}
                    </SubMenu>
                )
            }else{
            return(
            <Menu.Item onClick={()=>{
                this.props.history.push(item.pathname);
            }} key={item.pathname}   className={style.menu}  >{item.icon}{item.title}</Menu.Item>
                )
            }
        })
        return arrs
    }
    userInfo(){
        return (
            <div>
                <Menu>
                    <Menu.Item key="0">
                        <a href="http://www.alipay.com/">用户通知</a>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <a href="http://www.taobao.com/">用户设置</a>
                    </Menu.Item>
                    <Menu.Item key="3">退出</Menu.Item>
                </Menu>
         </div>)
    }
    render() {
        const menus=AdminRouter.filter(item=>{
            return item.isNav===true
        })
        return (
            <div className={style.container}>
            <Layout className={style.wrap}>
            <Sider>
              <Menu
                  mode="inline"
                  // openKeys={this.state.openKeys}
                  // onOpenChange={this.onOpenChange}
                  style={{borderRight:0,height:"100%",backgroundColor:"#001529", color:"#fff",width: 200,paddingTop:50}}
              >
                {this.menut(menus)}
              </Menu>
            </Sider>
            <Layout>
                <Header className={style.header}>
                    <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                    <Dropdown className={style.dropdown} overlay={this.userInfo()} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            用户中心 <DownOutlined />
                        </a>
                    </Dropdown>
                    <Badge count={9}/>
                </Header>
                <Content style={{background:'#fff',overflow:"auto",padding:'15px'}}>{this.props.children}</Content>
                <Footer>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
            </div>
        );
    }
}
export default withRouter(Menus);