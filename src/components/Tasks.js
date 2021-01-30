import React, { useContext, useEffect } from 'react'
import TaskContext from '../context/TaskContext'
import 'materialize-css/dist/css/materialize.min.css'
import TaskList from './TaskList'

const Tasks = () => {

  const {taskStorage, getTasks} = useContext(TaskContext)
  
  useEffect(() => {
   getTasks()
   //eslint-disable-next-line
  }, [])

  return (
    <div>
      <div className='list' >
      
        <span><strong className='completed'><a href='#!'>Pending</a></strong><a href='#!'>Completed</a> </span>
          <ul className='collection'>
            <li className='collection-header'></li>
            { taskStorage.length > 0  ? taskStorage.map(task => <TaskList task={task}/>) : <h4 className='loading-message'>Hmm.. no tasks for today</h4> }  
          </ul>
         
      </div>
    </div>
  )
}

export default Tasks
