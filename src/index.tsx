import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import {Router} from "react-router-dom";
import Routers from "./router/router"
import {createBrowserHistory} from "history";
const history = createBrowserHistory();
import createStore from '@store/index'
const store = createStore();
import 'antd/dist/antd.css';


// // 配置热更新
declare var module:any;
if (module.hot) {
	console.log("热更新");
	module.hot.accept(() => {
		ReactDOM.render(
			<Routers />,
			document.getElementById('root')
		)
	})
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routers />
    </Router>
   </Provider>,
  document.getElementById("root")
);

