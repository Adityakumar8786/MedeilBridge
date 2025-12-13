import React from "react";
import { Link,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Register from "./pages/Register";
import Patient from "./pages/Patient";
import Govt from "./pages/Govt";
import './index.css';

export default function App(){
  return(
    <div>
    <header>
      <div className='logo'>Health Hackers</div>

      <nav className="nav">
<Link to='/'>Home</Link>
<Link to='/register'>Register</Link>
<Link to='/patient'>Patient</Link>
<Link to='/doctor'>Doctor</Link>
<Link to='/govt'>Govt</Link>
      </nav>
    </header>

    <main className='main'>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/patient' element={<Patient/>}/>
<Route path='/doctor' element={<Doctor/>}/>
<Route path='/govt' element={<Govt/>}/>
</Routes>
    </main>

    </div>
  )
}