import { LazyExoticComponent } from 'react';
import Loadable from 'react-loadable';

export interface RouteObj {
	path: string;
	name: string;
	icon?: string;
	component: LazyExoticComponent<any>;
	exact?: boolean;
}

interface Routes extends RouteObj {
	routes?: RouteObj[];
}

const MyLoadingComponent = ({ isLoading, error }) => {
	return null
}

const Config: Routes[] = [
	{
		path: '/login',
		component: Loadable({ loader: () => import('@pages/login/login'), loading: MyLoadingComponent }),
		exact: true,
		name: '登录',
	},
	{
		path: '/',
		component: Loadable({ loader: () => import('@components/layouts/layouts'), loading: MyLoadingComponent }),
		name: '登录',
		routes: [{
			path: '/home',
			component: Loadable({ loader: () => import('@pages/home/home'), loading: MyLoadingComponent }),
			exact: true,
			name: '首页',
		},
		{
			path: '/table',
			component: Loadable({ loader: () => import('@pages/table/table'), loading: MyLoadingComponent }),
			exact: true,
			name: 'table',
		},
		{
			path: '/form',
			component: Loadable({ loader: () => import('@pages/form/form'), loading: MyLoadingComponent }),
			exact: true,
			name: 'form',
		},
		]
	},
];


export default Config;
