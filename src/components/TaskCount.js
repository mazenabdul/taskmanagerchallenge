import React, {useContext} from 'react'
import TaskContext from '../context/TaskContext'

const TaskCount = () => {

  const { taskStorage } = useContext(TaskContext)
  console.log(taskStorage)
  return (
    <div className="row">
      <div className="card-panel">
        <h3 className='task-count'>{taskStorage.length}</h3>
        <div className='label'><p className='task-label'>Tasks</p></div> 
      </div>
    </div>
  )
}

export default TaskCount
