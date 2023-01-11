import { useState,useEffect } from "react";
import '../Styles/booklist.css'
import {  useNavigate,useLocation } from "react-router-dom";

const Booklist = () => {
    // delete a book from server 
    let HandleRemove = (id,title) =>{
        fetch(`http://localhost:3004/books/${id} ` )
        alert(`${title} is deleted permanent`)
    }
    let navigate =useNavigate();
    let location = useLocation();

    let read = (id) => {
        if (location.pathname == 'admin/booklist') {
        navigate(`/admin/booklist/${id}`)

            
        } else {
            // go to admin portal ,one route with "/booklist:id" is hter we need to add that to user portal beacause we that will jus
            navigate(`/user/booklist/${id}`)
        }

    }
    
    let [books,setbooks] = useState([])
    useEffect (() =>
    {
        let fetchbooks = async() =>
        {
           let response = await fetch(' http://localhost:3004/books');
           let data = await response.json();
           setbooks(data);
        }
        fetchbooks() 
    },[books])
    return ( 
        <div className="bookList">
            <h1>BookList</h1>
            <div className="book_section">
                {books.map((x) => (
                    <div className="books">
                    <div className="book_name">
                    <img src={x.thumbnailUrl} alt="" />
                    </div>

                    <div className="bookauthors">
                    <h2>{x.title}</h2>
                        {/* <h4>{x.authors.join(' , ')}</h4> */}
                        <div className="bookdetails"></div>
                        {/* <p>{x.authors.toString()}</p>   */}
                        {/* <p>{x.categories.toString()}</p> */}
                        <p>{x.authors}</p>
                        <p>{x.categories }</p>

                        <p id="pagecount">Page Count: {x.pageCount}</p>

                        {/* to convert the array of multiple author name we have converted that array to tostring or we can uuse join with (, ) */}
                        <button onClick={() => read(x.id)}>Read More</button>
                       {/* here we are using use location with condition like if pathname of location is admin/book-list then only display the delete button  */}
                       {location.pathname == '/admin/booklist' && <button onClick={() => HandleRemove(x.id,x.title)}>
                            <img style={{width:"30px"}} src="/images/delete.png" alt="" />
                        </button>
                        }
                    </div>
                    </div>
                   
                ))}
            </div>
        </div>
     );
}
 
export default Booklist;