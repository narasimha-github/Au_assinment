import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'

import './index.css'

class Todo extends Component {
  state = {todolist: [], addInput: ''}

  onClickAddButton = () => {
    const {addInput} = this.state
    const len = addInput.length
    const loop = addInput[len - 1]
    for (let i = 0; i < loop; i++) {
      const newItem = {
        id: uuidv4(),
        addInput,
        isActive: true,
      }
      this.setState(prevState => ({
        todolist: [...prevState.todolist, newItem],
        addInput: '',
      }))
    }
  }

  changeButton = id => {
    this.setState(prevState => ({
      todolist: prevState.todolist.map(each => {
        if (id === each.id) {
          return {...each, isActive: false}
        }
        return each
      }),
    }))
  }

  changeblur = id => {
    this.setState(prevState => ({
      todolist: prevState.todolist.map(each => {
        if (each.id === id) {
          return {...each, isActive: true}
        }
        return each
      }),
    }))
  }

  onchangemmm = (id, description) => {
    this.setState(prevState => ({
      todolist: prevState.todolist.map(each => {
        if (each.id === id) {
          return {...each, addInput: description}
        }
        return each
      }),
    }))
  }

  onChangeInput = event => {
    this.setState({addInput: event.target.value})
  }

  deleteButton = id => {
    const {todolist} = this.state
    const filterList = todolist.filter(each => each.id !== id)
    this.setState({todolist: filterList})
  }

  render() {
    const {todolist, addInput} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">Day Goals!</h1>
        <div className="sub-container">
          <input
            type="text"
            className="input"
            onChange={this.onChangeInput}
            value={addInput}
          />
          <button className="button" onClick={this.onClickAddButton}>
            Add ToDo
          </button>
          <div>
            <ul>
              {todolist.map((each, index) => (
                <TodoItem
                  key={each.id}
                  todoValue={each}
                  deleteButton={this.deleteButton}
                  changeButton={this.changeButton}
                  changeblur={this.changeblur}
                  serialNumber={index + 1}
                  onchangemmm={this.onchangemmm}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Todo
