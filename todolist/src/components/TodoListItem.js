import React, { Component,Fragment } from 'react'

export default class TodoListItem extends Component {
    deleteList = () =>{
        this.props.deleteList(this.props.id)
    }
    doneList = () =>{
        this.props.doneList(this.props.id)
    }
    render() {
        return (
            <Fragment>
                <div className= {this.props.done ? "success todoItem" : "todoItem"}>
                    <span className="cancle" onClick={this.deleteList}>X</span>
                    <span className="content">{this.props.title }</span>
                    <span  className="doneBtn" onClick={this.doneList}>✔</span> 
                </div>
            </Fragment>
        )
    }
}