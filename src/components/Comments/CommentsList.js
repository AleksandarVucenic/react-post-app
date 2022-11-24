import useSelector from "../../hooks/useSelector";
import { getPostComments } from "../../store/selectors/selector.comments";
import Comment from "./Comment";
import PropTypes from "prop-types";
import withLogger from "../../HOC/withLogger";
import { useEffect } from "react";

const CommentsList = ({ postId, helloMessage }) => {
	useEffect(() => {
		console.log(`${helloMessage} Comment List`);
	}, [helloMessage]);

	const comments = useSelector((state) => getPostComments(state, postId));
	return (
		<div>
			<h3>Comments</h3>
			{comments.map((comment, key) => (
				<div className="mb-2" key={key}>
					<Comment comment={comment} />
				</div>
			))}
		</div>
	);
};

CommentsList.propTypes = {
	postId: PropTypes.number,
};

export default withLogger(CommentsList);
