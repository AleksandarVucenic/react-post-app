import { Link } from "react-router-dom";
import useSelector from "../../hooks/useSelector";
import { getPostCommentNum } from "../../store/selectors/selector.comments";
import { getUserById } from "../../store/selectors/selector.users";
import PropTyps from "prop-types";
import { useEffect } from "react";
import withLogger from "../../HOC/withLogger";

const Post = (props) => {
	const { id, title, body, userId } = props.post;
	const { helloMessage } = props;
	const isLinked = props.isLinked;
	const user = useSelector((state) => getUserById(state, userId));
	const comments = useSelector((state) => getPostCommentNum(state, id));

	useEffect(() => {
		console.log(`${helloMessage} Post`);
	}, [helloMessage]);

	return (
		<div className="card bg-light mb-3">
			<div className="card-header">{title}</div>
			<div className="card-body">
				<p className="card-text">{body}</p>
				<p>Author: {user?.name}</p>
				<p>Comments: {comments}</p>
			</div>
			{isLinked ? (
				<Link to={`/post/${id}`} className="stretched-link"></Link>
			) : null}
		</div>
	);
};

Post.propTypes = {
	post: PropTyps.object,
	isLinked: PropTyps.bool,
};

Post.defaultProps = {
	isLinked: false,
};

export default withLogger(Post);
