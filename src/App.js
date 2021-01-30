import React,  { useEffect } from 'react'
import pinkImage from './img/Vector.png'
import blueImage from './img/Vector2.png'
import { Col, Row, Container} from 'react-bootstrap'
import { TaskProvider } from './context/TaskContext'
import M from 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import Tasks from './components/Tasks'
import AddTaskModal from './components/AddTaskModal'
import AddBtn from './components/AddBtn'
import TaskCount from './components/TaskCount'
import DateWidget from './components/DateWidget'

const App = () => {

  useEffect(() => {
    M.AutoInit()
  })

  return (
    <TaskProvider>
      <img className='pink-image' alt='' src= {pinkImage}></img>
      <img className='blue-image' alt='' src= {blueImage}></img>
      <Container>
        <Row>
          <Col>
            <AddBtn />
            <AddTaskModal />
            <Tasks/>
          </Col>
          <Col></Col>
          <Col >
            <div className='right-side'>
              <DateWidget/>
              <TaskCount />
            </div>
         </Col>
        </Row>
      </Container>
    </TaskProvider>
  );
}

export default App;
 