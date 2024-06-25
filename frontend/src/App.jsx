import './App.css'
import LoginPage from './pages/Login'
import { Registration } from './pages/Registration'
import { BrowserRouter,Routes,Route, redirect } from "react-router-dom";
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
import PrivateRoute from './authanticate/PrivateRoutes';

const isAuthenticated = () => {
  // Check if the user is logged in (e.g., check if token exists in localStorage)
  return localStorage.getItem('token') !== null;
};

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/controller/status" element = {<PrivateRoute isAuthenticated={isAuthenticated} element={DisasterStatusPage}/>}/>
        <Route path="/controller/status/newReport" element = {<PrivateRoute isAuthenticated={isAuthenticated} element={ReportForm}/>}/>
        <Route path="/controller/status/editReport" element = {<PrivateRoute isAuthenticated={isAuthenticated} element={EditReport}/>}/>
        <Route path="/controller/users" element = {<PrivateRoute isAuthenticated={isAuthenticated} element={UserControlPage}/>}/>
        <Route path="/controller/home" element = {<PrivateRoute isAuthenticated={isAuthenticated} element={ControllerHomePage}/>}/>
        <Route path="/controller/news" element = {<PrivateRoute isAuthenticated={isAuthenticated} element={NewsCreatorPage}/>}/>
        <Route path="/controller/requests" element = {<PrivateRoute isAuthenticated={isAuthenticated} element={Requests}/>}/>
        <Route path="/registration" element = {<PrivateRoute isAuthenticated={isAuthenticated} element={Registration}/>}/>
        <Route path="/window/:requestID" element={<PrivateRoute isAuthenticated={isAuthenticated} element={WindowComponent}/>} /> 
        <Route path="/controller/ContactInfoAdder" element={<PrivateRoute isAuthenticated={isAuthenticated} element={ContactInfoAdder}/>}/>
        <Route path="/controller/shelters" element = {<PrivateRoute isAuthenticated={isAuthenticated} element={ShelterLocationPage}/>} />
        <Route path="/controller/volunteering" element = {<PrivateRoute isAuthenticated={isAuthenticated} element={VolunteeringPage}/>} />
        <Route path="/controller/map" element = {<PrivateRoute isAuthenticated={isAuthenticated} element={DisasterMap}/>}/>
        <Route path='/search' element = {<PrivateRoute isAuthenticated={isAuthenticated} element={SearchResults}/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}
export default App
