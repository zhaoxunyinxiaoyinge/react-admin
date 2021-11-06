import React from "react";

const User = class extends React.Component {
  constructor(props) {
    console.log("构造器执行了");
    super(props);
    this.state = {
      count: 1,
    };
  }

  shouldComponentUpdate(prev,next) {
      console.log(prev,next)
    console.log("组件更新时触发");
    return true;
  }
  
  componentWillUpdate(){
      console.log("组件将要更新")
  }

  componentDidUpdate(){
      console.log("组件已经更新完成")
  }

  forceUpdate(){
      console.log("一般用于强制更新")
  }

  componentWillMount() {
    console.log("组件将要挂载的狗子");
  }

  componentWillReceiveProps(){
      console.log("组件的属性值之间更新时触发")
  }
  

  componentDidMount() {
    console.log("组件被挂载");
  }

  componentWillUnmount() {
    console.log("将要卸载的狗子");
  }

  render() {
    console.log("render方法执行");
        let count=this.state.count;
    count++
    return <div>
        <button onClick={()=>{this.setState({count})}}>点击一下</button>
        {this.state.count}
    </div>;
  }
};

export default User;
