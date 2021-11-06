import {TEST_DATA} from "./const";
//后续引入react-redux插件不需要了
export const  getData=()=>{
    const action={
        type:TEST_DATA,
        playLoad:""
    }
    return action;
}