import React, { Component } from "react";
import { Dropdown } from "antd";

const UserInfo = class extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Dropdown.Button
          icon={<DownOutlined />}
          loading={loadings[1]}
          overlay={menu}
          onClick={() => this.enterLoading(1)}
        >
          Submit
        </Dropdown.Button>
      </>
    );
  }
};
