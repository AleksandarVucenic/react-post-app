import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h3>Aleksandar Vucenic</h3>
			<p>Post Application</p>
			<Link to="/posts">
				<button type="button" className="btn btn-primary">
					View Posts
				</button>
			</Link>
		</div>
	);
};

export default Home;
