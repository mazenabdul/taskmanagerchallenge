import React , { useState, useContext } from 'react'
import TaskContext from '../context/TaskContext'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTaskModal = () => {

  //Initialize state variables
  const [task, setTask] = useState('')
  const [pending, setPending] = useState(false)
  const [priority, setPriority] = useState()
  const [date, setDate] = useState('')

  //Context
  const { taskStorage, addTask } = useContext(TaskContext)

  const onSubmit = () => {
   
    const newTask  =  {task, pending, priority, date}
    addTask(newTask)
    localStorage.setItem('tasks', JSON.stringify([newTask, ...taskStorage]))
    M.toast({ html: 'Task added!' })
   
  }

  return (
   
      <div id="add-task-modal" className="modal" >
        <div className="modal-content">
          <h4>Add a Task</h4>
            <div className='modal-container'>
              <div className='row'>
                <div className='input-field'>
                  <label htmlFor='task-name'>Task Name</label>
                  <input id='task-name' name='task-name' type='text' value={task} onChange={e => setTask(e.target.value)} /> 
                </div>   
              </div>

              <div className='row'>
                <label>Priority Level</label>
                  <select name='priority' value={priority} className='browser-default' onChange={e => setPriority(e.target.value)}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
              </div>

              <div className='row'>
                <label>
                <input type='checkbox' className='filled-in' checked={pending} value={pending} onChange={e => setPending(!pending)}/>
                <span>Pending?</span>
                </label>
              </div>

              <div className='row'>
                <label>Complete By:</label>
                <input type='date' value={date} onChange={e => setDate(e.target.value)} /> 
              </div>
            </div>
        </div>
        <div className="modal-footer">
          <a href='#!' onClick={onSubmit} className="modal-close waves-effect waves-green btn">Create</a>
        </div>
      </div>
  )
}

export default AddTaskModal
