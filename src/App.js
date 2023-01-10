import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LandingPage from './Components/landingPage';
import AdminLogin from './Components/adminLogin';
import UserLogin from './Components/userlogin';
import Admin_HomePage from './Components/admin-hommepage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path={'/'} element={<LandingPage/>} />
     <Route path={'/admin-login'} element={<AdminLogin/>} />
     {/* Writing the Routing path to link to url path */}
     <Route path={'/user-login'} element={<UserLogin/>}/>
     <Route path='/admin/*' element={<Admin_HomePage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
