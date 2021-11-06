import React, { Component } from "react";
import { Space, Dropdown, Button,Menu } from "antd";

const Dropdowns = class extends Component {

  menu=
      (<Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>)

  render() {
      const{menu}=this
    return (
      <Space direction="vertical">
        <Space wrap>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button type="primary">点击查看</Button>
          </Dropdown>
        </Space>
      </Space>
    );
  }
};

export default Dropdowns;
