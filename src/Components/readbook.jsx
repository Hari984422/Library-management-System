import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; //importing use params beacuse it can take the input from the the URL parameter directly
const ReadBook = () => {
    let param = useParams()
    let [daata,setdata] = useState([])
    useEffect (() => {

    let fetchdata = async() => {
       let response = await fetch(`http://localhost:3004/books/${param.id}`)

       let data = await response.json()
       setdata(data)
    }
    fetchdata()
},[])
    
    return ( 
       <div className="readbook">
       <h1>Read Books</h1>
        <h3>{daata.shortDescription}</h3>
        <h4>{daata.longDescription}</h4>
       
       </div>
     );
}
 
export default ReadBook;