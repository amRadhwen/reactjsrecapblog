import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () =>{
	const {id} = useParams();
	const {data: blog, loading, error} = useFetch(`http://localhost:5000/blogs/${id}`)

	return(
		<div className="blog-details">
			{
				!error ?
				(
					!loading ?
					(
						<article>
							<h2 className="top-title">{blog.title}</h2>
							<p>Written by: {blog.author}</p>
							<div>{blog.body}</div>
						</article>
					)
					:
					(
						<div className="loading">
							<p>Loading...</p>
						</div>
					)
				)
				:
				(
					<div className="error">
						<p>{error}</p>
					</div>
				)
			}
		</div>
	)
}

export default BlogDetails;