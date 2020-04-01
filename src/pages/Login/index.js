import React, {Component} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import style from "./index.module.less"
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 13,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 13,
    },
}
class Loin extends Component {
    onFinish = values => {
        console.log('Success:', values);
    };
    render() {
        return (
            <div className={style.forms}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish.bind(this)}
                    className={style.login}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Loin;