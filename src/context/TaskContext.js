import React, {  useReducer } from 'react'

const TaskContext = React.createContext()

//Reducer 
const reducer = (state, action) => {
  switch(action.type) {
    case 'add_task':
      return { ...state,  taskStorage: [...state.taskStorage, action.payload] }
    case 'get_tasks':
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
    
  }

  //Get Existing tasks
  const getTasks = () => {
    
    dispatch({ type: 'get_tasks' })
  }


return <TaskContext.Provider value={{taskStorage: state.taskStorage, addTask, getTasks}}>{children}</TaskContext.Provider>
}

export default TaskContext