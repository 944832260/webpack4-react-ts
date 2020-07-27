import React, { Component } from "react";
import { RouteProps } from "@public/interface";
import "./warehousing.scss";
import { Button,Table,Pagination, message } from 'antd';
import Axios from "axios";
import moment from "moment";


interface State {
    columns: any[];
    warehousingList: any[];
    pageNum:number;
    pageSize:number;
    total:number;
}
class Warehousing extends Component<RouteProps, State>  {
    state:State = {
        columns: [
            {
                title: '入库单号',
                dataIndex: 'entryNo',
                className:'entryNo',
                fixed: true,
                render: (text) => <a>{text}</a>,
            },
            {
                title: '供应商',
                dataIndex: 'vendorName',
                className:'vendorName',
            },
            {
                title: '操作员',
                dataIndex: 'opName',
                className: 'opName',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                width:120,
                fixed:'right',
                className:'ant-table-cell ant-table-cell-fix-right ant-table-cell-fix-right-first operation',
                render: (text:any,item:any,index:number) => {
                    return (
                        <div className='operation' style={{display:'flex',justifyContent:'space-between'}}>
                            <span onClick={()=>{this.routerDetail(item.id)}} >详情</span>
                            <span>编辑</span>
                            {/* <span>删除</span> */}
                        </div>
                    )
                }
            },
        ],
        warehousingList: [],//入库单列表
        page:1,
        pageNum:1,
        pageSize:10,
        total:1,
    }
    UNSAFE_componentWillMount(){
        this.warehousingList()
    }
    // 获取入库单列表
    warehousingList = () =>{
        let {warehousingList,pageNum,pageSize,total} = this.state;
        
    }
    // 同步入库单信息
    warehousingSync = () => {
        
    }
    onChange = (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`);
        console.log('selectedRows: ', selectedRows)
    }
    // 页码改变
    pageChange = (pageNum:number, pageSize:number) =>{
        this.setState({pageNum},()=>{
            this.warehousingList()
        })
    }
    routerDetail = (id:number) => {
        this.props.history.push('warehousing/detail/' + id)
    }
    render() {
        let { columns, warehousingList } = this.state;
        return (
            <div id="Warehousing">
                <div className='func'>
                    <Button className='func-item' type="primary">新增</Button>
                </div>
                <Table
                    className='Warehousing-table'
                    rowSelection={{
                        type: 'checkbox',
                        onChange: this.onChange,
                    }}
                    scroll={{x:true}}
                    columns={columns}
                    dataSource={warehousingList}
                    pagination={false}
                />
                <Pagination 
                    className='page' 
                    onChange={this.pageChange} 
                    total={this.state.total} 
                    pageSize={this.state.pageSize} 
                    current = {this.state.pageNum}  
                />
            </div>
        );
    }
}


export default Warehousing