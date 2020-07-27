import  React,{Component} from "react";
import { connect } from 'react-redux'
import {RouteProps} from "@public/interface";
import { Button, Input, message } from 'antd';
import axios from 'axios';
import "./login.scss";

interface State {
	username:string
	password:string
}
class Login extends Component<RouteProps, State> {
	state:State = {
		username:'',
		password:'',
	}
	componentDidMount(){
	}
	signIn = () => {
		let {username,password} = this.state;
		if (!username) {
			message.error('用户名不能为空')
		}
		if (!password) {
			message.error('密码不能为空')
		}
	}
	changeUsername = (ev: { target: { value: any; }; }) => {
		let {value:username} = ev.target;
		username = username.replace(/(^\s*)|(\s*$)/g, "")
		this.setState({username})
	}
	changePassword = (ev: { target: { value: any; }; }) => {
		let {value:password} = ev.target;
		password = password.replace(/(^\s*)|(\s*$)/g, "")
		this.setState({password})
	}
	render() {
		return (
			<div id="Login">
				<div className='box'>
					<h1>管理系统</h1>
					<p className='item'>
						<span>用户名:</span>
						<Input 
							className='input' 
							maxLength={24} 
							value={this.state.username} 
							onChange={(ev)=>{this.changeUsername(ev)}} 
							placeholder="请输入用户名" 
						/>
					</p>
					<p className='item'>
						<span>密码:</span>
						<Input 
							className='input' 
							maxLength={24} 
							value={this.state.password} 
							onChange={(ev)=>{this.changePassword(ev)}} 
							placeholder="请输入密码" 
							type='password'
						/>
					</p>
					<Button 
						className='submit' 
						onClick={()=>{this.signIn()}} 
						type="primary"
					>登录</Button>
				</div>
			</div>
		);
	}
}


export default Login