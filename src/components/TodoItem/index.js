import {Component} from 'react'
import {BsX} from 'react-icons/bs'
import './index.css'

class TodoItem extends Component {
  state = {description: '', count: 0}

  mainDelete = () => {
    const {todoValue, deleteButton, serialNumber, changeButton, changeblur} =
      this.props
    const {addInput, id, isActive} = todoValue
    deleteButton(id)
  }

  changem = () => {
    this.setState(prevState => ({count: prevState + 1}))
    const {todoValue, deleteButton, serialNumber, changeButton, changeblur} =
      this.props
    const {addInput, id, isActive} = todoValue
    changeButton(id)
  }

  onchangeDesc = event => {
    this.setState({description: event.target.value})
    const {
      todoValue,
      deleteButton,
      serialNumber,
      changeButton,
      changeblur,
      onchangemmm,
    } = this.props
    const {addInput, id, isActive} = todoValue
    const {description} = this.state
    onchangemmm(id, description)
  }

  onBlurchange = () => {
    const {todoValue, deleteButton, serialNumber, changeButton, changeblur} =
      this.props
    const {addInput, id, isActive} = todoValue
    changeblur(id)
  }

  render() {
    const {todoValue, deleteButton, serialNumber, changeButton, changeblur} =
      this.props
    const {addInput, id, isActive} = todoValue
    const {description, count} = this.state

    const m = addInput.length - 1
    const p = addInput.slice(0, m)

    return (
      <div className="mainDiv">
        {isActive ? (
          <>
            <p className="sub-para">
              {p} updated {count} times
            </p>
            <div className="mill">
              <button className="button1" onClick={this.mainDelete}>
                <BsX />
              </button>
              <button onClick={this.changem}>{serialNumber}</button>
            </div>
          </>
        ) : (
          <input
            onBlur={this.onBlurchange}
            className="input-style"
            onChange={this.onchangeDesc}
          />
        )}
      </div>
    )
  }
}

export default TodoItem
