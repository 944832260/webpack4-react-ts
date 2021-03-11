import React, { Component } from 'react';
import './form.scss'
import { RouteProps } from '@public/interface'
import { Form, Input, Checkbox, Button } from 'antd';

interface State {

}
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 16 },
};

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
class FormTest extends Component<RouteProps, State> {
    state: State = {

    }
    render() {
        return (
            <div className='public_page'>
                <Form
                    className='form'
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                    >
                        <Input style={{ width: 100 }} />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                    >
                        <Input style={{ width: 100 }} />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        label="选择"
                        valuePropName="checked"
                    >
                        <Checkbox style={{ width: 200 }}>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                    >
                        <Button style={{ width: 100 }} type="primary" htmlType="submit">submit</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default FormTest