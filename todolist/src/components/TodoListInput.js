import React, { Component, Fragment } from 'react'

export default class TodoListInput extends Component {
    onChange = (e) =>{
        this.props.inputChange(e.target.value)
    }
    addList = () =>{
        this.props.addList()
    }
    
    render() {
        return (
            <Fragment>
                <div className="todoInputBox">
                    <input type="text" className="todoInput" onChange={(e)=>{this.onChange(e)}} value={this.props.itemValue}/>
                    <button className="todoButton" onClick={this.addList}>추가</button>
                </div>
            </Fragment>
        )
    }
}



