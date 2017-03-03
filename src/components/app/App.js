/**
 * Created by zhang.futian on 2017/2/9.
 */
import React from "react";
import ReactDOM from "react-dom";
import Header from "../common/header/Header.js";
export default class App extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
           rightClass:"siderBar",
           menuActive:"menu"
        };
        this.handleClass = this.handleClass.bind(this);
    }
    handleClass(e){
        this.setState({
           rightClass:this.state.rightClass==="siderBar"?"siderBar active":"siderBar",
           menuActive:this.state.menuActive==="menu"?"menu active":"menu"   
        })
    }

    render(){

       return (
            <div>
                <Header rightClass={this.state.rightClass} />
                <span className={this.state.menuActive} onClick={this.handleClass}><i></i></span>
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

