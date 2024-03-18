import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Contact from './routes/Contact'




function App() {
 // const [count, setCount] = useState(0)

  return (
    
      <div>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/service' element={<Service/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              
          </Routes>
        
          
          

    </div>
    

  )
}

export default App
