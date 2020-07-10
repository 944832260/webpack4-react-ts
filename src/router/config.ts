import {lazy, LazyExoticComponent} from 'react'

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
const Config:Routes[] = [
	{
		path: '/',
		component: lazy(() => import("@pages/home/home")),
		exact: true,
		name:'登录',
	},
];


export default Config;
