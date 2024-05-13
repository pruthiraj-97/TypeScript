import './App.css'
import MyButton from './components/Button' 
import ApiFetch from './components/ApiFetch'
import State from './components/state'
import EventReact from './components/event'
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
     {/* <MyButton
       onClick={()=>console.log("clicked")}
     text="click me"/>
     <MyButton 
       onClick={()=>console.log("clicked")}
     text="submit"/> */}
     {/* <ApiFetch/> */}
     {/* <State/> */}
     <EventReact/>
    </BrowserRouter>
  )
}

export default App
