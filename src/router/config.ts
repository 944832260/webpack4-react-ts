import { lazy, LazyExoticComponent } from 'react'
import Layouts from '@components/layouts/layouts'
import Home from '@pages/home/home'
import Warehousing from '@pages/warehousing/warehousing'

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
		// component: lazy(() => import("@components/layouts/layouts")),
		name: '登录',
		routes: [{
			path: '/home',
			component: Home,
			// component: lazy(() => import("@pages/home/home")),
			exact: true,
			name: '首页',
		}, 
		{
			path: '/warehousing',
			component: Warehousing,
			// component: lazy(() => import("@pages/warehousing/warehousing")),
			exact: true,
			name: 'table',
		}, 
		]
	},
];


export default Config;
