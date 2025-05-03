import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("radhwen");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false)

	const history = useHistory();

	const handleSubmit = (e)=>{
		e.preventDefault();
		const blog = {title, body, author};
		setLoading(true);
		setTimeout(()=>{
			axios.post("http://localhost:5000/blogs", blog)
			.then(res=>{
				setLoading(false);
				setSuccess(true);
				setError(false);
				history.push("/blog/"+res.data.id);
			})
			.catch(err=>{
				setError(err.message);
				setLoading(false);
				setSuccess(false);
			})
		}, 2000);


		/*
		fetch("http://localhost:5000/blogs", {
			method: "POST",
			headerx: {"Content-Type": "application/josn"},
			body: JSON.stringify(blog)
		}).then(()=>{
			console.log("New Blog Added !");
		})
		*/
	}

	useEffect(()=>{

	}, [loading])

	return(
		<div className="create">
			<h2 className="top-title">Create a new blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e)=>setTitle(e.target.value)}
				/>
				<label>Author</label>
				<select
					value={author}
					onChange={(e)=>setAuthor(e.target.value)}
				>
					<option value="radhwen">Radhwen</option>
					<option value="amri">Amri</option>
				</select>
				<label>Body</label>
				<textarea
					required
					onChange={(e)=>setBody(e.target.value)}
					value={body}
				></textarea>
				<button>Create</button>
				{
					!error ?
					(
						loading ?
						(
							<div className="loading">
								<p>Loading...</p>
							</div>
						)
						:
						(
							success && <p className="success">Post Successfully Created :)</p>
						)
					)
					:
					(
						<p className="error">{error}</p>
					)
				}
			</form>
		</div>
	)
}

export default Create;