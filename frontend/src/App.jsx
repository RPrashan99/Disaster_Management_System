import './App.css'
import Home from './pages/home'
import LoginPage from './pages/Login'
import Registration from './pages/Registration'
import Donations from './pages/Donations'
import Weather from './pages/Weather'
import Contact from './pages/Contact'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { DisasterStatusPage } from './pages/controller/DisasterStatusPage'
import { UserControlPage } from './pages/controller/UserControlPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/Donations" element={<Donations/>} />
        <Route path="/Weather" element={<Weather/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/controller/status" element = {<DisasterStatusPage/>}/>
        <Route path="/controller/users" element = {<UserControlPage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
