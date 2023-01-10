import '../Styles/adduser.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
    let [name,setname] = useState("")
    let [age,setAge] = useState("")
    let [phno,setphno] = useState("")
    let [email,setemail] = useState("")
    let navigate = useNavigate();
    
    let handleSubmit = () => {
        let data = {name,age,email,phno}
        fetch('http://localhost:3004/Users',{
            method:"POST",
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify(data)
        })
        alert('User added to the list')
        navigate('/admin/userlist')


    }
    return ( 
        
        <div className="addUser">
            <form onSubmit={handleSubmit} action="">
                <div className='Name'>
                    <label htmlFor=""> Name: </label>
                <input value={name} onChange={(e) => setname(e.target.value)} min='1' required type="text" placeholder='Enter the name ' />
                </div>
                <div className='age'>
                    <label htmlFor="">Age:</label>
                <input value={age} onChange={(e) => setAge(e.target.value)} min='1' required type="text" placeholder='Enter the Age ' />
                </div>
                <div className='e-mail'>
                    <label htmlFor="">Email:</label>
                <input value={email} onChange={(e) => setemail(e.target.value)} min='1' required type="text" placeholder='Enter the Email' />
                </div>
                <div className='phno'>
                    <label htmlFor="">Phone no</label>
                <input value={phno} onChange={(a) => setphno(a.target.value)} required type="tel" minLength='10' maxLength='10' placeholder='Enter the phone Number ' />
                </div>
                <button>Add User</button>
            </form>
        </div>
     );
}
 
export default AddUser;