import React from 'react'
import Signup from  './Signup'
import Login from  './Login'
import Home from  './Home'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path='/'  element={<Login/>}></Route>
       <Route path='/Signup' element={<Signup/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
       
    </div>
  )
}

export default App


 







