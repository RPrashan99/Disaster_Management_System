import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/MainPages/Home";
import Emargancy from "./Pages/Others/Emargancy";
import Contacts from "./Pages/MainPages/Contacts";
import Informations from "./Pages/MainPages/Informations";
import News from "./Pages/MainPages/News";
import Donations from "./Pages/MainPages/Donations";
import UserLogin from "./Pages/AuthPages/NormalSignIn";
import UserRegistration from "./Pages/AuthPages/NormalSignUp";
import UserProfile from "./Pages/Others/UserProfile";
import Volunteering from "./Pages/Others/Volunteering";
import Weather from "./Pages/MainPages/Weather";
import SafetyTips from "./Pages/Others/SafetyTips";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Emargancy" element={<Emargancy />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Informations" element={<Informations />} />
        <Route path="/News" element={<News />} />
        <Route path="/Donations" element={<Donations />} />
        <Route path="/Volunteering" element={<Volunteering />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/SafetyTips" element={<SafetyTips />} />

        <Route path="/UserProfile" element={<UserProfile/>} />

        <Route path="/Login" element={<UserLogin/>} />
        <Route path="/Registration" element={<UserRegistration/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
