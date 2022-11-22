import { useParams } from "react-router-dom"
import useFetch from "./useFetch"

const Blogdetail = () => {
    const {id}= useParams()
    const {data: blog, error, isPending}= useFetch('https://humble-labrador-74.hasura.app/v1/graphql/', + id ) // `http://localhost:8000/blogs/${id}`
  return (
    <div className="blog-detail">
        
       {isPending && <div>Loading...</div>} 
       {error && <div>{error} </div>}
       {blog &&(
        <article>
            <h2>{blog.title} </h2>
            <p> Written by {blog.author}</p>
            <div> {blog.body}</div>
        </article>
       ) }
        </div>
  )
}

export default Blogdetail