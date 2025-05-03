import BlogList from "./BlogList";
import useFetch from "./useFetch";
import axios from "axios";

const Home = () => {
	const {data: blogs, loading, error, setData} = useFetch("http://localhost:5000/blogs");
	const handleDelete = (id) => {
		axios.delete(`http://localhost:5000/blogs/${id}`)
		.then(res=>{
			setData(blogs.filter(blog=>blog.id !== id))
		})
		.catch(err=>{
			console.log(err)
		})
	}

	return(
		<div className="home">
			{
				!error ? ( 
				!loading ? 
				(
					<>
					<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
					<BlogList blogs={blogs.filter((blog)=>blog.author === "amri" || blog.author === "Amri")} title="Amri's Blogs" handleDelete={handleDelete}/>
					</>
				):
				(
					<div className="loading">
						<p>Loading...</p>
					</div>
				)
				):
				(
					<div className="error">
						<p>{error}</p>
					</div>
				)
			}
		</div>
	);
}

export default Home;