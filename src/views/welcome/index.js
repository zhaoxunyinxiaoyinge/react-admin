import React, { createRef, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getData } from "../../store/actionReduires";
import module from "./index.module.scss";
import { Row, Col } from "antd";
import { getDanboardTable } from "./api/index";
import { Table, Button, Modal, Form, Input, Select,Radio,DatePicker, Space } from "antd";

import * as echarts from "echarts";

class Danboards extends Component {
  constructor(props) {
    super(props);
    this.initDom = createRef();
    this.initDoms = createRef();
    this.initDomT = createRef();
    this.total = 20;
    this.state = {
      loading: false,
      query: {
        pagesize: 10,
        page: 1,
      },
      datasource: [],
      columns: [],

      visable: false,
      type: "edit",

      radioVal:1,
    };
  }

  formRef = React.createRef();

  // 用于设置表单的初始值
  initialValues={name:"xiaomei",age:"23",address:"龙岗",date:null,sex:1};

  handlePage(page, size) {
    let query = this.state.query;
    query.page = page;
    query.pagesize = size;
    this.setState(
      {
        query,
      },
      () => {
        getDanboardTable().then((res) => {
          let columns = res.data.data.columns;

          if (res.data.code == 0) {
            this.setState({
              datasource: res.data.data.datasource,
              columns: columns,
              loading: false,
            });
          }
        });
      }
    );
  }

  handleSize(size) {
    console.log(size);
  }

  handleEdit() {
    this.setState({
      visable: true,
    });
  }

  thandleOk() {
    let data=this.formRef.current.getFieldsValue();
    console.log(data,"data");    
     // 表单的submit的提交(这里会触发验证和finsh的事件，请注意)；
    this.formRef.current.submit();

    // 重置表单
    // this.formRef.current.resetFields();
    this.setState({
      visable: false,
    });  
  } 

  handleCancel() {
    this.setState({
      visable: false,
    });
  }

  handleAdd() {
    this.setState({
      visable: true,
      type: "新增",
    });
  }

  onFinish(value) {
    console.log(value,"这个时finsh的触发事件")
  }

  onChangeRadio(val){
   let value=val.target.value;
    this.setState({
      radioVal:value
    })
  }

  onChangeDate(){

  }

  componentDidMount() {
    let myChart = echarts.init(this.initDom.current);
    let myCharts = echarts.init(this.initDoms.current);
    let myChartT = echarts.init(this.initDomT.current);
    this.setState({
      loading: true,
    });

    getDanboardTable().then((res) => {
      let columns = res.data.data.columns;

      if (res.data.code == 0) {
        this.setState({
          datasource: res.data.data.datasource,
          columns: columns,
          loading: false,
        });
      }
    });

    myCharts.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });

    myChartT.setOption({
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    });

    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }

  render() {
    let { loading, visable, type } = this.state;
    let { columns, query } = this.state;
    let that = this;

    columns.push({
      title: "action",
      dataIndex: "",
      key: "",
      width: "200px",
      render() {
        return (
          <div>
            <Button
              onClick={() => {
                that.handleEdit();
              }}
              type="link"
            >
              编辑
            </Button>

            <Button type="link">删除</Button>
          </div>
        );
      },
    });

    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 16,
      },
    };

    return (
      <div className={module.container}>
        <Row>
          <Col span={7}>
            <div
              className="echart"
              ref={this.initDom}
              style={{
                height: "300px",
              }}
            ></div>
          </Col>
          <Col span={7}>
            <div
              className="echart"
              ref={this.initDoms}
              style={{ height: "300px" }}
            ></div>
          </Col>
          <Col span={7}>
            <div
              className="echart"
              ref={this.initDomT}
              style={{ height: "300px" }}
            ></div>
          </Col>
        </Row>
        <Button
          type="primary"
          border-radius={"5px"}
          style={{ marginBottom: "20px" }}
          onClick={() => this.handleAdd()}
        >
          新增
        </Button>
        <Table
          pagination={{
            onChange: (page, size) => {
              this.handlePage(page, size);
            },
            onShowSizeChange: (e) => {
              this.handleSize(e);
            },
            showSizeChanger: true,
            showQuickJumper: true,
            pageSize: query.pagesize,
            current: query.page,
            pageSizeOptions: ["10", "20", "50"],
            defaultCurrent: 1,
            total: 100,
          }}
          loading={loading}
          columns={columns}
          dataSource={this.state.datasource}
        />
        ,
        <Modal
          visible={visable}
          title={type == "edit" ? "编辑" : "新增"}
          onOk={() => this.thandleOk()}
          onCancel={() => this.handleCancel()}
        >
          <Form
            {...layout}
            name="control-hooks"

            colon={false}
            ref={this.formRef}
            initialValues={this.initialValues}

            onFinish={this.onFinish.bind(this)}
          >
            <Form.Item
              name="name"
              label="name"
              rules={[
                {
                  required: true,
                  message: "必填类容",
                },
              ]}
            >
              <Input  />
            </Form.Item>

            <Form.Item
              name="age"
              label="age"
              rules={[
                {
                  required: true,
                  message: "必填类容",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="address"
              label="address"
              rules={[
                {
                  required: true,
                  message: "必填类容",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="sex"
              label="sex"
              rules={[
                {
                  required: true,
                  message: "必填类容",
                },
              ]}
            >
          <Radio.Group onChange={this.onChangeRadio.bind(this)}    value={this.state.radioVal}>
            <Radio value={1}>男</Radio>
            <Radio value={2}>女</Radio>
          </Radio.Group>
            </Form.Item>

            <Form.Item name="date" label="date"rules={[{required:true,message:"必填"}]}>
                   <DatePicker onChange={this.onChangeDate.bind(this)} /> 
            </Form.Item>        

          </Form>
        </Modal>
      </div>
    );
  }
}

const mapSate = (state) => {
  return {
    list: state.list,
  };
};

const mapAction = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
  };
};

export default connect(mapSate, mapAction)(Danboards);
