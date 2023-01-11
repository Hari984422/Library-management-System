import {Routes,Route} from 'react-router-dom'
import '../Styles/admin-homeppage.css'
import AdminNavbar from './adminNavbar';
import AdminDash from './adminDashboard';
import Booklist from './booklist';
import Userlist from './userlist';
import ReadBook from './readbook';
import AddUser from './adduser';
import AddBooks from './addBooks';

const Admin_HomePage = () => {
    return ( 
        <div className="homepage">
            <AdminNavbar/>
        <Routes>
            <Route path='/' element={<AdminDash/>}/>
            <Route path='/booklist' element={<Booklist/>}/>
            <Route path='/userlist' element={<Userlist/>}/>
            <Route path="/booklist/:id" element={<ReadBook/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/addbooks' element={<AddBooks/>}/>

        </Routes>
        </div>
     );
}
 
export default Admin_HomePage;