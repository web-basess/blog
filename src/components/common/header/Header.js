/**
 * Created by zhang.futian on 2017/2/9.
 */
require("./Header.scss");
import React from "react";
import { Router, Route, hashHistory, Link, IndexRedirect,browserHistory} from 'react-router';

export default class Header extends React.Component {
    constructor(props,context){
        super(props,context);
    }
        render(){
        return (
            <div className={this.props.rightClass}>
                <div className="bg"></div>
                <ul>
                    <li><Link to="/home" activeClassName="active" >首页</Link></li>
                    <li><Link to="/project" activeClassName="active">个人作品</Link></li>
                    <li><Link to="/resume" activeClassName="active">个人简历</Link></li>
                </ul>
            </div>
        )
    }
}