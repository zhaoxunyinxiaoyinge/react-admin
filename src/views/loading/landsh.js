import React, { Component } from "react";

const landsh = function ({ loader, loading: Loading }) {
  return class Landshs extends Component {
    state = { isLoding: false, LoaderComponent: null };
    componentDidMount() {
      loader().then((res) =>{
        this.setState({ isLoding: true, LoaderComponent: res.default })
      }
      );
    }
    render() {
      const{ LoaderComponent,isLoding} = this.state;
      return (isLoding ? <LoaderComponent/> : <Loading />);
    }
  };
};

export default landsh;
