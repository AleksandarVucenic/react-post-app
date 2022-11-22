export const getPostComments = (state, postId) => {
	return state.comments?.filter((comment) => {
		return comment.postId === postId;
	});
};

export const getPostCommentNum = (state, postId) => {
	return getPostComments(state, postId)?.length;
};
