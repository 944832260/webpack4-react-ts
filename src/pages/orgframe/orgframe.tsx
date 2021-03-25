import React, { Component } from "react";
import { RouteProps } from "@public/interface";
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';
import "./orgframe.scss";


interface State {
    initechOrg: any;
}


class Orgframe extends Component<RouteProps, State>  {
    state: State = {
        initechOrg: {
            name: "皇帝",
            actor: "皇帝",
            money:'200',
            children: [
                {
                    name: "户部",
                    actor: "户部",
                    money:'200',
                    children: [
                        {
                            name: "王有才",
                            actor: "王有才",
                            money:'200',
                            children: [
                                {
                                    name: "王二",
                                    actor: "王二",
                                    money:'200',
                                }, {
                                    name: "张三",
                                    actor: "张三",
                                    money:'200',
                                },
                            ]
                        }, {
                            name: "张华",
                            actor: "张华",
                            money:'200',
                            children: [
                                {
                                    name: "王二",
                                    actor: "王二",
                                    money:'200',
                                }, {
                                    name: "张三",
                                    actor: "张三",
                                    money:'200',
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "工部",
                    actor: "工部",
                    money:'200',
                },
                {
                    name: "吏部",
                    actor: "吏部",
                    money:'200',
                },
            ]
        }
    }
    UNSAFE_componentWillMount() {
    }
    render() {
        const MyNodeComponent = ({ node }) => {
            return (
                <div
                    className="initechNode"
                    onClick={() => alert(`${node.actor}:我有${node.money}块钱` )}
                >{node.name}</div>
            );
        };
        return (
            <div id="orgframe" className='public_page'>
                <OrgChart tree={this.state.initechOrg} NodeComponent={MyNodeComponent} />
            </div >
        );
    }
}


export default Orgframe