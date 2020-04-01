import React, {Component} from 'react';
import {Card,Table,Button,Popconfirm,Pagination, Modal,Input} from "antd"
import {PlusOutlined } from '@ant-design/icons';
import style from "./index.module.less"
import {withRouter} from "react-router-dom"
class Admin extends Component {
    state={
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        dataSource:[
            {
                key:'1',
                _id:"dfjdsfkjdsfkdsjf",
                name:"xiaomei",
                },
            {
                key: '2',
                _id:"dfjdsfkjdsfkdsjf",
                name: '胡彦斌',
            },
            {
                key: '3',
                _id:"dfjdsfkjdsfkdsjf",
                name: '胡彦祖',
            },
        ],
        columns:[
            {
                title: 'ID',
                dataIndex: '_id',
                key: '_id',
            },
            {
                title: 'username',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title:"Action",
                dataIndex:"action",
                render:()=>{
                    return(
                        <>
                            <Button onClick={()=>{
                                this.props.history.push("/Admin/update");
                            }} style={{marginRight:'10px'}} type='primary'>修改</Button>
                            <Popconfirm  title="Are you sure？" okText="Yes" cancelText="No">
                                <Button type='danger'>删除</Button>
                            </Popconfirm>
                        </>
                        )

                }
    }

        ]
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div style={{"text-align":"left"}}>
                <Card title='管理员列表' bordered={false}>
                    <div>
                        <Button type="primary" onClick={this.showModal}>
                            <PlusOutlined /> 点击添加管理员
                        </Button>
                        <Modal
                            title="请填写内容？"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            confirmLoading={this.state.confirmLoading}
                            onCancel={this.handleCancel}
                        >
                           <div style={{marginBottom:"10px"}}><span>用户名:</span><Input defaultValue='请输入用户名'/></div>
                           <div><span>密码:</span> <Input defaultValue="请输入用户密码"/></div>
                        </Modal>
                    </div>
                </Card>
                <Table pagination={false} dataSource={this.state.dataSource} columns={this.state.columns} />
                <div className={style.pgination }>
                    <Pagination defaultCurrent={1} total={50} positon='bottomLeft'  />
                </div>

            </div>
        );
    }
}

export default withRouter(Admin);