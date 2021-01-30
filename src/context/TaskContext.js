import React, {  useReducer } from 'react'

const TaskContext = React.createContext()

//Reducer 
const reducer = (state, action) => {
  switch(action.type) {
    case 'add_task':
      
      return { ...state,  taskStorage: [...state.taskStorage, action.payload] }
    case 'get_tasks':
      //...JSON.parse(localStorage.getItem('tasks'))
      if(localStorage.getItem('tasks')){
        return { ...state, taskStorage: [ ...state.taskStorage, ...JSON.parse(localStorage.getItem('tasks')) ]}
      } else {
        return { ...state, taskStorage: [...state.taskStorage] }
      }
        
    default: 
      return state
  }
}

export const TaskProvider = ({ children }) => {

  const initialState = {
    taskStorage: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  
 
  //Add a new task
  const addTask = (task) => {
    
    dispatch({ type: 'add_task', payload: task  })
    
   
    //console.log(localStorage.getItem('tasks'))
  }

  //Get Existing tasks
  const getTasks = () => {
    //const data = JSON.parse(localStorage.getItem('tasks'))
    dispatch({ type: 'get_tasks' })
  }

  //Delete a task

return <TaskContext.Provider value={{taskStorage: state.taskStorage, addTask, getTasks}}>{children}</TaskContext.Provider>
}

export default TaskContext