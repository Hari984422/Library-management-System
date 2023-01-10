import '../Styles/addbook.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
let navigate = useNavigate();

    let [title,settitle] = useState("")
    let [author,setauthor] = useState("")
    let [categories,setcategories] = useState("")
    let [pageCount,setpagecount] = useState("")
    let [shortDescription,setshortDescription] = useState("")
    let [longDescription,setlongDescription] = useState("")
    let [thumbnailUrl,setthumbnailUrl] = useState("")
    let handleSubmit = (e) =>{
        e.preventDefault();
        //data to be posted
        let bookdata = {title,author,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
        //posting to server
        fetch('http://localhost:3004/books',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookdata)
        })
        alert("book added successfully")
        navigate('/admin/booklist')
    }
    return ( 
        <div className="addBooks">
            <h1>Add Books</h1>
            {/* title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl */}
            <div className="form1">
                <form onSubmit={handleSubmit} action="">
                    <div className="title">
                        <label htmlFor="" >Title</label>
                        <input value={title} onChange={(e) => settitle(e.target.value)} required type="text" placeholder="Enter the title" />
                        </div>
                        <div className="authors">
                        <label htmlFor="">Authors</label>
                        <input value={author} onChange={(e) => setauthor(e.target.value)} required type="text" placeholder="Enter the Author Name"/>
                        </div>
                        <div className="categories">
                        <label htmlFor="">Categories</label>
                        <input value={categories} onChange={(e) => setcategories( e.target.value)} required type="text" placeholder="Enter the Categories"/>
                        </div>
                        <div className="pageCount">
                        <label htmlFor="">PageCount</label>
                        <input value={pageCount} onChange={(e) => setpagecount( e.target.value)} required type="number" placeholder="Enter the PageCount" />
                        </div>
                        <div className="shortDescription">
                        <label htmlFor="">Short Description</label>
                        <textarea value={shortDescription} onChange={(e) => setshortDescription( e.target.value)} required placeholder="Enter the short Description"  cols="30" rows="5"></textarea>
                        </div>
                        <div className="longDescription">
                        <label htmlFor="">Long Description</label>
                        <textarea value={longDescription} onChange={(e) => setlongDescription( e.target.value)} required placeholder="Enter the long Description"  cols="30" rows="10"></textarea>
                         </div>
                         <div className="thumbnailUrl">
                        <label htmlFor="">Image</label>
                        <input value={thumbnailUrl} onChange={(e) =>setthumbnailUrl( e.target.value)} required type="link"  placeholder="Browse File" />
                        </div>
                        <button>Add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddBooks;