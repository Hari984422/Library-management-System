import { useEffect, useState } from "react";
import '../Styles/userlist.css'

const Userlist = () => {
    let [user,setuser] = useState([])
    useEffect(() => {
        let fetchdata = async() => {
            let response =await fetch(' http://localhost:3004/Users')
            let data =await response.json()
            setuser(data);  
        }
        fetchdata()
    });
    let handleRemove = (id,name) => {
        setuser(user.filter(y => y.id != id))
        alert(`${name} has been removed`)
    }
    
    return ( 
        <div className="User_list">
            <h1>UserList</h1>
            <div className="users_section">
               { user.map(x => (
                    <div className="user_book">
                        <div className="userName">
                        <h2>{x.name}</h2>
                        </div>
                        <div className="userAge">
                            <h4>{x.age}</h4></div>
                            <div className="userphno">
                            <h4>{x.Phoneno}</h4>
                            <h5>{x.email}</h5>
                        
                            </div>
                            <button onClick={() => handleRemove(x.id,x.name)}>Delete</button>
                        </div>

                ))
               }
            </div>

        </div>
     );
}
 
export default Userlist;