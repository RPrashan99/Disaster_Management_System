import './App.css'
import LoginPage from './pages/Login'
import { Registration } from './pages/Registration'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { DisasterStatusPage } from './pages/controller/DisasterStatusPage';
import { UserControlPage } from  './pages/controller/UserControlPage';
import { ControllerHomePage } from './pages/controller/ControllerHomePage';
import { NewsCreatorPage } from './pages/controller/NewsCreatorPage';
import { Requests } from './pages/controller/Requests';
import { WindowComponent } from './Windows/RequestWindow';
import { ReportForm } from './components/Controller/DisasterStatus/DisasterReportForm';
import { EditReport } from './components/Controller/DisasterStatus/DisasterEditReport';
import ContactInfoAdder from './pages/controller/ContactInfoAdder';
import { ShelterLocationPage } from './pages/controller/ShelterLocations';
import { VolunteeringPage } from './pages/controller/VolunteeringPage';
import { DisasterMap } from './pages/controller/DisasterMap';
import SearchResults from './components/Controller/SearchResult';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/controller/status" element = {<DisasterStatusPage/>}/>
        <Route path="/controller/status/newReport" element = {<ReportForm/>}/>
        <Route path="/controller/status/editReport" element = {<EditReport/>}/>
        <Route path="/controller/users" element = {<UserControlPage/>}/>
        <Route path="/controller/home" element = {<ControllerHomePage/>}/>
        <Route path="/controller/news" element = {<NewsCreatorPage/>}/>
        <Route path="/controller/requests" element = {<Requests/>}/>
        <Route path="/registration" element = {<Registration/>}/>
        <Route path="/window/:requestID" element={<WindowComponent/>} /> 
        <Route path="/controller/ContactInfoAdder" element={<ContactInfoAdder/>}/>
        <Route path="/controller/shelters" element = {<ShelterLocationPage/>} />
        <Route path="/controller/volunteering" element = {<VolunteeringPage/>} />
        <Route path="/controller/map" element = {<DisasterMap/>}/>
        <Route path='/search' element = {<SearchResults/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}
export default App
