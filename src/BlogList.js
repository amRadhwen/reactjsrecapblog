import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {

	return(
		<>
		<h2 className="top-title">{title}</h2>
		<div className="blog-list">
			{
				blogs.length ?
				(
					blogs.map((blog)=>(
						<div className="blog-preview" key={blog.id}>
							<h2>{blog.title}</h2>{}
							<p>Written by {blog.author}</p>
							<button id="details-btn"><Link to={`/blog/${blog.id}`}>Details</Link></button>
							<button id="delete-btn" onClick={()=>{handleDelete(blog.id)}}>Delete</button>
						</div>
					))
				)
				:
				(
					<div className="no-blogs">
						<p>No Blogs !</p>
					</div>
				)
			}
		</div>
		</>
	)
}

export default BlogList;