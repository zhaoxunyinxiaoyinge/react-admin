import React, { Component } from "react";
import { Menu, Image } from "antd";
import { list } from "./../menuList/index";
import module from "./index.module.css";
import { Link, withRouter } from "react-router-dom";
import Icon from "./../asset/img/1.jpg";
import Toggle from "./toggle";
import Header from "./header";

const { SubMenu } = Menu;
const Layout = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapse: false,
      selectKeys: [],
      defaultOpenKeys: [],
      nodes: [],
    };
    this.toggle = this.toggle.bind(this);
  }

  handleClick(e) {}

  getSub(data) {
    const { pathname } = this.props.location;
    return data.map((item) => {
      if (item.children && item.children.length > 0) {
        let curItem = item.children.find((items) => items.key == pathname);
        if (curItem) {
          this.defaultOpenKeys = item.key;
        }
        return (
          <SubMenu className={module.sub} key={item.pathname} title={item.title} icon={item.icon}>
            {this.getSub(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item
            className={module.menucolor}
            key={item.pathname}
            icon={item.icon}
          >
            <Link to={item.pathname}>{item.title}</Link>
          </Menu.Item>
        );
      }
    });
  }

  componentWillMount() {
    const { pathname } = this.props.location;
    console.log(pathname,444)
    let nodes = this.getSub(list);
    this.setState({
      selectKeys: pathname,
      nodes:nodes
    });
  }

  toggle() {
    let isCollapse = !this.state.isCollapse;
    this.setState({
      isCollapse,
    });
  }

  render() {
    const { isCollapse, selectKeys, defaultOpenKeys, nodes } = this.state;
    return (
      <div className={module.container}>
        <section className={module.section}>
          <Menu
            onClick={this.handleClick}
            style={{
              width: isCollapse ? "50px" : "250px",
              backgroundColor: "#160403da",
              height: "100%",
            }}
            selectedKeys={[defaultOpenKeys]}
            defaultSelectedKeys={[selectKeys]}
            mode="inline"
            inlineCollapsed={isCollapse}
          >
            <div
              style={{
                height: 50,
                display: "flex",
                justifyContent:"center",
                alignItems: "center",
              }}
            >
              <Image style={{  borderRadius:"5px"}} width={80} height={40} src={Icon}></Image>
              {
                !isCollapse? <span style={{color:'#fff',fontSize:"18px",marginLeft:"10px",fontWeight:'bolder'}}>REACT后台</span>:null
              }
              
            </div>
            {nodes}
          </Menu>
          <div className={module.content}>
            <Header></Header>
            <div className={module.tag}>
              <Toggle toggle={this.toggle} />
            </div>
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
};

export default withRouter(Layout);
