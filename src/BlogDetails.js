import { useParams } from "react-router";
import { useHistory } from 'react-router-dom'
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id )
    const history = useHistory()

    const handleClick = (e) => 
    {
        e.preventDefault()
        // console.log("Test")

        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'Delete'
        }).then(() =>
        {
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }

            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p><b>Written by { blog.author }</b></p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleClick }>Delete</button>
                </article>
                
            )}
            
        </div>
     );
}
 
export default BlogDetails;