import React, {Component} from "react";
import {NavLink}from "react-router-dom"
const myLink=(props)=>{
    return (
        <NavLink {...props}></NavLink>
    )
}

export default myLink;