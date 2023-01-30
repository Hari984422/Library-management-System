import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LandingPage from './Components/landingPage';
import AdminLogin from './Components/adminLogin';
import UserLogin from './Components/userlogin';
import Admin_HomePage from './Components/admin-hommepage';
import UserHomePage from './Components/userHomepage';
import Error from './Components/Error';

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
     <Route path={'/user/*'} element={<UserHomePage/>} />
     <Route path='*' element={<Error/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
