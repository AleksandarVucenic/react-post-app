import PropTypes from "prop-types";

const Comment = (props) => {
	const { name, email, body } = props.comment;

	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{email}</h6>
				<p className="card-text">{body}</p>
			</div>
		</div>
	);
};

Comment.propTypes = {
	comment: PropTypes.object,
};

export default Comment;
