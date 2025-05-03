import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./404";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {

  return (
  	<Router>
		<div className="App">
			<div className="content">
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/create">
						<Create />
					</Route>
					<Route path="/blog/:id">
						<BlogDetails />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</div>
		</div>
	</Router>
  );
}

export default App;
