import React, { Component } from "react";
import { Menu, Image } from "antd";
import { danyRoute } from "./../router/index";
import module from "./index.module.css";
import { Link, withRouter } from "react-router-dom";
import Icon from "./../asset/img/1.jpg";
import Toggle from "./toggle";
import Dropdowns from "./dropdown";

const { SubMenu } = Menu;
const Layout = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapse: false,
      selectKeys: [],
    };
    this.toggle = this.toggle.bind(this);
  }

  handleClick(e) {}
  getSub({ title, pathname, children = [], icon }) {
    return (
      <SubMenu
        className={module.menucolor}
        key={pathname}
        icon={icon}
        title={title}
      >
        {children.length > 0 &&
          children.map((item) => {
            return item.children && item.children.length > 0
              ? this.getSub({ title, pathname, children })
              : this.getMenuItem(item);
          })}
      </SubMenu>
    );
  }

  getMenuItem(item) {
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

  componentWillMount() {
    let selectArr = [];
    const { pathname } = this.props.location;
    selectArr.push(pathname);
    this.setState({
      selectKeys: selectArr,
    });
  }

  toggle() {
    let isCollapse = !this.state.isCollapse;
    this.setState({
      isCollapse,
    });
  }

  render() {
    const { isCollapse, selectKeys } = this.state;
    return (
      <div className={module.container}>
        <header className={module.header}>
          <div style={{display:"flex",alignItems:"center"}}> 
            <Image
              style={{ height: "50px", width: "100px", borderRadius: "10px" }}
              src={Icon}
            ></Image>
            {/* <span style={{ fontSize: "14px", marginLeft: "20px" }}>

            </span> */}
          </div>
          <Dropdowns />
        </header>
        <section className={module.section}>
          <Menu
            onClick={this.handleClick}
            style={{
              width: isCollapse ? "50px" : "250px",
              backgroundColor: "#54211d",
              height:"100%"
            }}
            defaultSelectedKeys={selectKeys}
            mode="inline"
            inlineCollapsed={isCollapse}
          >
            {danyRoute.map((item) => {
              return item.children ? this.getSub(item) : this.getMenuItem(item);
            })}
          </Menu>

          <div className={module.content}>
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
