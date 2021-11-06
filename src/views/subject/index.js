// https://www.qq.com/query?id=news&name=search&ref=website，输出对象 { id: 'news', name: 'search', ref: 'website' }
let url=" https://www.qq.com/query?id=news&name=search&ref=website"
function getPrmas(url){
    let urls=new URL(url).slice(1,);
    let arr=urls.split("&");
    let obj={};
    arr.forEach(item=>{
        let sArr=item.split("=");
        obj[sArr[0]]=sArr[1]
    })
    return obj;
}


async function manyReqs() {
    function getReq (url, data) {
      return new Promise((resolve, reject) => {
        axios.get(url, {
          params: {
            ...data
          }
        }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        })
      })
    }
   
    const datas = [];
    for (let i = 1; i <= 200; i++) {
      datas.push({ id: i })
    }
   
    const url = 'https://test.com/get';
    const promises = datas.map((data) => {
      getReq(url, data);
    })
   
    let result = [];
    for (let i = 9; i < 200; i += 10) {
      const promisePart = promises.slice(i - 9, i + 1);
      result = result.concat(await Promise.all(promisePart));
    }
   
    return result;
  }