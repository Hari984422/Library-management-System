import { Routes,Route } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserDashBoard from "./userDashBoard";
import Booklist from "./booklist";
import ReadBook from "./readbook";
const UserHomePage = () => {
    return ( 
        <div className="userhomePage">
            <UserNavbar />
        <Routes>
        <Route path={'/'} element={<UserDashBoard/>}/>    
        <Route path={'/booklist'} element={<Booklist/>}/>   
        <Route path={'/booklist/:id'} element={<ReadBook/>}/>

            </Routes>   

        </div>
     );
}
 
export default UserHomePage;

//homepage is just a jsx file we dont display homepage anywhere in here but dash board is the page which will
//be displayed as home in the website and navbar will be connected with every page after home beacaues they will
// be called in the home page