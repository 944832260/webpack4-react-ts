import  React,{Component} from "react";
import { connect } from 'react-redux'
import {RouteProps} from "@public/interface";
import "./home.scss";
import axios from 'axios'
import { Button } from 'antd';

interface State {
	bb:string
}
class Home extends Component<RouteProps, State>  {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		b:''
	// 	}
	// }
	state = {
		bb:''
	}
	componentDidMount(){
		axios.get('/customer/api/v1/customer/bpolicy',{
			params:{
				per_page:5,
				page:1,
			}
		}).then(res=>{
			console.log(res,'666666')
		})
	}
	render() {
		let {bb} = this.state;
		return (
			<div id="Home">
				<div>
					么么哒
				</div>
				<img src={require('./image/job.png')} alt=""/>
				<Button type="primary">Primary Button</Button>
			</div>
		);
	}
}


export default Home