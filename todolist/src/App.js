import React, {Component, Fragment } from 'react';
import './App.css';
import TodoListInput from './components/TodoListInput';
import TodoListItem from './components/TodoListItem';


class App extends Component {
  state={
    itemValue : "",
    itemList : [
      {
        id : 0,
        title : '샤인머스켓 먹기',
        done : false
      },
  
    ]
  }

  componentDidUpdate(){
    console.log(this.state.itemList)
  }

  inputChange = (value) => {
    this.setState({itemValue : value})
  }
  addList = () =>{
    this.setState({itemList : this.state.itemList.concat({id : this.state.itemList.length+1 , title : this.state.itemValue, done : false})})
    this.inputChange("")
  }
  deleteList = (id) =>{
    console.log(id)
    this.setState({itemList : this.state.itemList.filter(data=> data.id !== id) })
    console.log(this.state.itemList)
  }
  doneList = (id) =>{
    this.setState({itemList : this.state.itemList.map((data)=> {return data.id == id ? ({...data, done : !data.done}) : data})})
  }

    render() {
      const {itemValue, itemList} = this.state;
      const {inputChange} = this;

      const list = itemList.map((item)=>{
        return <TodoListItem title={item.title} id={item.id} done={item.done} deleteList={this.deleteList} doneList={this.doneList}/>
      })
      

      return (
            <Fragment>
              <div className="todoList">
                <div className="todoHeader">
                  오늘 할 일
                </div>
                <div className="todoContent">
                  <TodoListInput itemValue={itemValue} inputChange={inputChange} addList={this.addList}/>
                  {list }
                </div>
              </div>
            </Fragment>
        )
    }
}

export default App;
