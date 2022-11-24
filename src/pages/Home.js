import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import withLogger from "../HOC/withLogger";

const Home = (props) => {
	useEffect(() => {
		console.log(`${props.helloMessage} Home`);
	}, [props]);

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

export default withLogger(Home);
