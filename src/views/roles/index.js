import React,{Component} from "react"

const Child=(props)=>{
    const {getUserName}=props;
    getUserName("zhaoxuinyin")
    return <div>11111</div>
}


const Roles=class extends Component {
    constructor(){
        super();
    }
    getusername(res){
        console.log(res);
    }

    render(){
        const {getusername}=this
        return (<div>
            <Child getUserName={getusername}></Child>
        </div>)
    }
}

export default  Roles