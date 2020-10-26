import { lazy, LazyExoticComponent } from 'react'
import Layouts from '@components/layouts/layouts'
import Home from '@pages/home/home'
import Table from '@pages/table/table'

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
const Config: Routes[] = [
	{
		path: '/login',
		component: lazy(() => import("@pages/login/login")),
		exact: true,
		name: '登录',
	},
	{
		path: '/',
		component: Layouts,
		name: '登录',
		routes: [{
			path: '/home',
			component: Home,
			exact: true,
			name: '首页',
		}, 
		{
			path: '/warehousing',
			component: Table,
			exact: true,
			name: 'table',
		}, 
		]
	},
];


export default Config;
