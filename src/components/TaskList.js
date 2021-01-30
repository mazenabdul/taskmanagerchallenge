import React, {useState} from 'react'
import '../App.css'
import { Button, ButtonGroup } from '@material-ui/core';
import Date from './Date'
import CloseIcon from '@material-ui/icons/Close';


const TaskList = ({ task }) => {

  const [pending, setPending] = useState(!task.pending)

  return (
    
    <li className='collection-item'>
      <div>
        <div className='task-item'>
          <div className='header'>
            <div className='header-checkbox'>
              <label>
                <input type="checkbox" checked={pending} onChange={e => setPending(!pending)} />
                <span></span>
              </label>
              <p className='task-title'>{task.task}</p>  
            </div>
            <div className='date'>
              <a href='#!'><CloseIcon /> </a>
              <Date time={task.date}/> 
            </div>
         
          </div>
        </div>
        
      <div className='priority'>
          <ButtonGroup>
            <Button id="low" className='btn' style={{borderRadius: '25px', margin: '5px',padding: '15px', backgroundColor: '#5FCD8D', color: 'white'}} disabled={task.priority !== 'Low'} >Low</Button>
            <Button id="med"className='btn'  style={{borderRadius: '25px', margin: '5px',padding: '15px', backgroundColor: '#FB8333', color: 'white'}} disabled={task.priority !== 'Medium'}>Medium</Button>
            <Button id="high" className='btn' style={{borderRadius: '25px', margin: '5px',padding: '15px', backgroundColor: '#FF6159', color: 'white'}} disabled={task.priority !== 'High'}>High</Button>  
          </ButtonGroup>
      </div>
      
    </div>
  </li>
  )
}

export default TaskList
