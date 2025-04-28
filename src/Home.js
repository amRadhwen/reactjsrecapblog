import { useState } from "react";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{title: "My New website", body: "Warehouse render-farm military-grade network cartel dolphin A.I. Tokyo crypto-long-chain hydrocarbons rifle footage. Shanty town sign franchise film saturation point 8-bit alcohol receding dome jeans. Smart-motion cartel rifle tower math-skyscraper neon artisanal garage wristwatch modem denim concrete. ", author: "Radhwen", id: 1},
		{title: "Welcome section", body: "Knife skyscraper systema tiger-team hotdog render-farm artisanal corporation. Wonton soup wristwatch rebar sunglasses military-grade city motion disposable assault numinous rifle narrative faded drugs. Artisanal convenience store garage sub-orbital lights stimulate assault human kanji. Sign math-weathered artisanal sentient courier network Tokyo singularity rebar marketing franchise uplink. ", author: "Amri", id: 2},
		{title: "React dev tips", body: "Assault artisanal construct assassin 8-bit computer engine augmented reality katana. Lights pen physical bomb numinous realism boat neural papier-mache chrome saturation point footage construct narrative rifle. Carbon corrupted euro-pop Shibuya order-flow warehouse dolphin wristwatch rifle stimulate garage. Tiger-team tube-space dead sub-orbital shoes crypto-futurity Kowloon corporation geodesic sensory semiotics spook. Film vinyl assault sub-orbital neural refrigerator meta-plastic. ", author: "Amri Radhwen", id: 3}
	]);

	return(
		<div className="home">
			{
				blogs.map((blog)=>(
					<div className="blog-preview" key={blog.id}>
						<h2>{blog.title}</h2>{}
						<p>Written by {blog.author}</p>
					</div>
				))
			}
		</div>
	);
}

export default Home;