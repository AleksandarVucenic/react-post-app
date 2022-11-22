import { useEffect, useState } from "react";
import useSelector from "../../hooks/useSelector";
import { getPosts } from "../../store/selectors/selector.posts";
import Post from "./Post";
import PropTypes from "prop-types";

const PostList = ({ search }) => {
	const [page, setPage] = useState(() => {
		return 1;
	});
	const postData = useSelector((state) => {
		return getPosts(state, search, page);
	});

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 20
			) {
				setPage((prevState) => prevState + 1);
			}
		});

		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	return (
		<div>
			<h3>Posts</h3>
			{postData?.map((post, key) => (
				<Post post={post} key={key} isLinked />
			))}
			{postData.length === 0 ? (
				<div className="card mb-3">
					<div className="card-body">
						<h3>Posts not found.</h3>
					</div>
				</div>
			) : null}
		</div>
	);
};

PostList.propType = {
	search: PropTypes.string,
};

PostList.defaultProps = {
	search: "",
};

export default PostList;
