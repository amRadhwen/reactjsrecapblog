import { useState } from "react";

const Home = () => {

	const [name, setName] = useState("Radhwen");
	const [age, setAge] = useState(29);

	const handleClick = (e) => {
		setName("Amri");
		setAge("Twenty-Nine");
	};

	return(
		<div className="home">
			<h2>Home Page</h2>
			<p>{name} is {age} yo.</p>
			<button onClick={(e)=>{handleClick(e)}}>Click Me</button>
		</div>
	);
}

export default Home;