import React, { Component } from "react";
import { Tag } from "antd";
const Breakrumb = class extends Component {
  getBreacrum(){}
  render() {
    return (
      <div className={module.breakrumb}>
        <Tag
          closable
        >
          Movies
        </Tag>
      </div>
    );
  }
};

export default Breakrumb;