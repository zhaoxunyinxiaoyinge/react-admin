import React, { Component } from "react";
import {Breadcrumb} from "antd";
const Breakrumb = class extends Component {
  getBreacrum() {}
  render() {
    return (
      <div style={{height:"50px",display: "flex", alignItems: "center" }}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        ,
      </div>
    );
  }
};

export default Breakrumb;
