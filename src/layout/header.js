import React, { Component } from "react";
import Breadcrumb from "./breakcurm";
import Info from "./dropdown";

let Header = class extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "10px",
          backgroundColor: "#eee",
          justifyContent:"space-between"
        }}
      >
        <Breadcrumb></Breadcrumb>
        <div>
          <Info></Info>
        </div>
      </div>
    );
  }
};

export default Header;
