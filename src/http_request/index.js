import axios from "axios";

let token = ''
axios.interceptors.request.use(
	config => {
		let user = window.localStorage.getItem('DECLARE_TOKEN')
		if (user) {
			token = user;
			// 携带token传输
			config.headers['Authorization'] = "Bearer " + token;
		}
		return config;
	},
	error => {
		return Promise.reject(error.response);
	}
);


// http response 拦截器
axios.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		// 此处做错误处理的一些逻辑，比如请求超时返回登录页面
		if (error.response.status == 401) {
			// console.log(error.response.data)
			if (error.response.data.code == 401) {
				// location.href = '/';
			}
		}
		return Promise.reject(error.response)
	}
);
