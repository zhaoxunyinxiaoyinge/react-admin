import instance from "../../../utils/index";

export function getDanboardTable(params){
    return instance({
        url:"/getDanboard",
        methods:"get",
        params
    })
}