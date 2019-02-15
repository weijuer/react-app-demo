import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }

    this.hanldleInputChange = this.hanldleInputChange.bind(this);
    this.hanldleBtnClick = this.hanldleBtnClick.bind(this);
    this.getTodoItems = this.getTodoItems.bind(this);
  }

  hanldleBtnClick() {
    if(this.state.inputValue) {
      this.setState({
        inputValue: '',
        list: [...this.state.list, this.state.inputValue]
      })
    }
  }

  hanldleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemClick(index) {
    console.log(index);
    // copy
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  handleDelete(index) {
    console.log(index);
    // copy
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list})
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
        return (
          <TodoItem 
            del={this.handleDelete.bind(this, index)} 
            key={index} 
            content={item} 
          />
        )
      })
    )
  }

  render() {
    return (
      <div className="todo-list-container">
        <div className="todo-list-input">
          <input style={{border: '1px solid #ddd'}} value={this.state.inputValue} onChange={this.hanldleInputChange} />
          <button className="red-btn" onClick={this.hanldleBtnClick}>add</button>
        </div>

        <ul>{this.getTodoItems()}</ul>
      </div>
    );
  }
}

export default TodoList;
