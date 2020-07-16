import axios from "axios";
import { message } from "antd";

axios.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error.response);
	}
);


// http response 拦截器
axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		// 此处做错误处理的一些逻辑，比如请求超时返回登录页面
		if (error.response.status == 401) {
			message.error('登录信息过期')
			location.href='/login'
		}
		return Promise.reject(error.response)
	}
);
