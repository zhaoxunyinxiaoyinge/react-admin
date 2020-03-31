import React from "react"
// import {Loading} from './../Components'
//安装的参数就是调用时的传入参数；这里是一个高阶组件
const Loadable=({loader,loading:Loading})=>{
    return class load extends React.Component{
        constructor(){
            super()
            this.state={
                LoadingComponent:null
            }
        }
        componentDidMount(){
            loader().then(res=>{
                this.setState({
                LoadingComponent:res.default
                })
            })
        }
        render(){
            const {LoadingComponent}=this.state
            return(
            LoadingComponent? <LoadingComponent/>:<Loading/>
            )
        }
    }
}
export default Loadable