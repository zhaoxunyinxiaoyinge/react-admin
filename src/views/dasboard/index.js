import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import {getData} from "./../../store/actionReduires"

const Danboard = (props) => {
  return <div>danborad</div>;
};

const mapSate=(state)=>{
  return {
    list:state.list
  }
}

const mapAction=(dispatch)=>{
  return {
    getData:bindActionCreators(getData,dispatch),
  }
}

export default connect(mapSate,mapAction )(Danboard);