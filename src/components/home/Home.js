/**
 * Created by zhang.futian on 2017/2/9.
 */
require("./Home.scss");
import React from "react";
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    
    }
    render(){
        return ( 
        	<div className="index">
        	    <p><b>姓名：</b>张福天</p>	
                <p><b>工作年限：</b>6年</p>
                <p><b>性别：</b>男</p>
                <p><b>出生年月：</b>1988年4月8日</p>
                <p><b>籍贯：</b>黑龙江－齐齐哈尔</p>
                <p><b>Email:</b>6345015@qq.com</p>
                <p><b>github:</b><a href="https://github.com/web-basess">https://github.com/web-basess</a></p>
        	</div>
        	 )
    }
}
