import React, { Component } from "react";

const Pageation = class extends Component {
  constructor() {
    super();
  }
  
  render() {
    const { x, y } = this.props;
    return (
      <div>
        {/* <img  style={{position:"absolute",left:x-20,top:y-20}}
         src="https://files.jb51.net/image/8a210.gif"></img> */}
      </div>
    );
  }
};

function createPagetions(Wouter) {
  class mouse extends Component {
    constructor() {
      super();
      this.state = {
        x: 0,
        y: 0,
      };
    }

    componentDidMount() {
        this.mouse();
    }

    mouse() {
    }

    render() {
      return <Wouter {...this.state}></Wouter>;
     }
   } 
   mouse.displayName=`mouse${getDisplayName(Wouter)}`
  return mouse
}


function getDisplayName(component){
    return component.displayName||component.name||'component'
}

export default createPagetions( Pageation);
