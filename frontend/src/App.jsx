import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './Authentification/SignUp'
import Login from './Authentification/Login'

import Home from './Home';
import ForgotPassword from './Authentification/ForgoPassword';


// import AjoutHotel from './ListeHotel/AjoutHotel';
import HomeDashbord from './Dashbord/HomeDashbord';
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/" element={<Login />} />
       <Route path="/forgot-password" element={<ForgotPassword />} />
       {/* <Route path="/ajouter" element={<AjoutHotel />} /> */}
      <Route path="/dashome" element={<HomeDashbord />} />


    </Routes>
    </BrowserRouter>
  )
}

export default App
