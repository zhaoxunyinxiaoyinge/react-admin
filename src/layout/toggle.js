import React, { Component } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
const Toggle = class extends Component {

  render() {
    const {toggle}=this.props;
    return <MenuFoldOutlined style={{ fontSize: "24px",paddingLeft:"10px" }} onClick={toggle} />;
  }
};

export default Toggle;
