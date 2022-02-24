import Mock, { Random } from "mockjs"

// danboard面板表格接口
let danbaoardTable= () => {
    return Mock.mock("/getDanboard", "get",  {
        code: 0,
        data: {
          columns: [
            {
              title: 'Name',
              dataIndex: 'name',
              width: "auto",
            },
            {
              title:"Sex",
              dataIndex:"sex"
            },
            {
              title: 'Age',
              dataIndex: 'age',
              width: "auto",
            },
            {
              title: 'Address',
              dataIndex: 'address',
            },
            {
              title: 'Date',
              dataIndex: 'date',
            },
            
          ],

          "datasource|10":[
            {
              "key|+1":1,
              "sex|1":["男","女"],
              "name":Random.name(),
              "age|1":[12,35,23],
              "address":Random.name(),
              "date":new Date()
            }
          ]
         
        },
    });
  };


  export default function runMock(){
    danbaoardTable();
  }
