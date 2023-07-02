import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import About from './pages/About'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { AuthContextProvider } from './contexts/AuthContext';
import Info from './pages/Info';
import Contacts from './pages/Contacts';




function App() {
  return (
    <div className="App">
      <AuthContextProvider>
          <Router> 
          <Navbar/>
          <Routes> 
            <Route path="/"  element={<Home/>}/>  
            <Route path="/Login" exact element={<Login/>}/>
            <Route path="/About" exact element={<About/>}/>
            <Route path="/Info" exact element={<Info/>}/>
            <Route path="/Contacts" exact element={<Contacts/>}/>
            <Route path='/SignUp' exact element={<SignUp/>}/>
          </Routes>
          <Footer/>
        </Router> 
      </AuthContextProvider>

    </div>
  );
}

export default App
