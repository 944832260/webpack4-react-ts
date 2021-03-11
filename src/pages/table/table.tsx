import React, { Component } from "react";
import { RouteProps } from "@public/interface";
import "./table.scss";
import { Button, Table, Pagination, Select, Form, Input, Checkbox } from 'antd';
import { ColumnsType } from "antd/lib/table";
const { Option } = Select;


interface State {
    columns: ColumnsType;
    tableList: any[];
    pageNum: number;
    pageSize: number;
    total: number;
    approvalStatus: string;
}

const onFinish = (values: any) => {
    console.log('Success:', values);
}

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
}

class table extends Component<RouteProps, State>  {
    state: State = {
        columns: [
            {
                title: '品类名称',
                dataIndex: 'name',
                fixed: true,
            },
            {
                title: '总重（吨）',
                dataIndex: 'tie',
            },
            {
                title: '总价（元）',
                dataIndex: 'gang',
            },
        ],
        tableList: [{
            name: '占山',
            tie: '1',
            gang: '1',
            zhi: '1',
            total: '3',
        }, {
            name: '李武',
            tie: '6',
            gang: '1',
            zhi: '10',
            total: '17',
        }, {
            name: '张三丰',
            tie: '10',
            gang: '10',
            zhi: '1',
            total: '21',
        }],//入库单列表
        pageNum: 1,
        pageSize: 10,
        total: 1,
        approvalStatus: 'all',
    }
    UNSAFE_componentWillMount() {
    }
    // 同步入库单信息
    tableSync = () => {

    }
    // 状态改变
    approvalStatus = (value: string) => {
        if (value == '1') {
            let { columns } = this.state;
            columns = [{
                title: '11111',
                dataIndex: 'name',
            }, {
                title: '11111',
                dataIndex: 'zhongl',
            }, {
                title: '品类2',
                dataIndex: 'entryNo',
            },]
            this.setState({ columns })
        }
        if (value == '0') {
            let { columns } = this.state;
            columns = [{
                title: '品类1',
                dataIndex: 'name',
            }, {
                title: '品类1',
                dataIndex: 'zhongl',
            }, {
                title: '品类1',
                dataIndex: 'entryNo',
            },]
            this.setState({ columns })
        }
        this.setState({ approvalStatus: value, pageNum: 1, })
    }
    onChange = (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`);
        console.log('selectedRows: ', selectedRows)
    }
    // 页码改变
    pageChange = (pageNum: number, pageSize: number) => {
        this.setState({ pageNum }, () => {
        })
    }
    render() {
        let { columns, tableList } = this.state;
        return (
            <div id="table" className='public_page'>
                <Form
                    className='func'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        className='func_item'
                    >
                        <Input  style={{ width: 100 }} />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        className='func_item'
                    >
                        <Input  style={{ width: 100 }} />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        label="选择"
                        valuePropName="checked" className='func_item'
                    >
                        <Checkbox style={{ width: 200 }}>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        style={{width:200,}}
                        className='func_item'
                    >
                        <Button style={{ width: 100 }} type="primary" htmlType="submit">submit</Button>
                    </Form.Item>
                </Form>
                <Table
                    className='table-table'
                    scroll={{ x: true }}
                    columns={columns}
                    dataSource={tableList}
                    pagination={false}
                />
                <Pagination
                    className='page'
                    onChange={this.pageChange}
                    total={this.state.total}
                    pageSize={this.state.pageSize}
                    current={this.state.pageNum}
                />
            </div >
        );
    }
}


export default table