import  React,{Component,Suspense} from "react";
import {RouteProps} from "@public/interface";
import { connect } from 'react-redux'
import "./home.scss";
import { Button } from 'antd';

interface State {
}
class Home extends Component<RouteProps, State>  {
	state:State = {
	}

	render() {
		let {USER} = this.props;
		return (
			<div id="Home">
				<p className='tip'>欢迎您：{USER.name}	</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		USER: state.USER
	}
}

export default connect(mapStateToProps)(Home)