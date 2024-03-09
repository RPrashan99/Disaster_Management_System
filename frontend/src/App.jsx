import './App.css'
import Home from './pages/home'
import LoginPage from './pages/Login'
import Registration from './pages/Registration'
import Donations from './pages/Donations'
import Weather from './pages/Weather'
import Contact from './pages/Contact'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { DisasterStatusPage } from './pages/controller/DisasterStatusPage';
import { ControllerHomePage } from './pages/controller/ControllerHomePage';
import { NewsCreatorPage } from './pages/controller/NewsCreatorPage';
import { Requests } from './pages/controller/Requests'

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
        <Route path="/controller/home" element = {<ControllerHomePage/>}/>
        <Route path="/controller/news" element = {<NewsCreatorPage/>}/>
        <Route path="/controller/requests" element = {<Requests/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
