export const fetchComments = (payload) => {
	return {
		type: "FETCH_COMMENTS",
		payload: payload,
	};
};

export const fetchPosts = (payload) => {
	return {
		type: "FETCH_POSTS",
		payload: payload,
	};
};

export const fetchUsers = (payload) => {
	return {
		type: "FETCH_USERS",
		payload: payload,
	};
};

export const fetchPost = (payload) => {
	return {
		type: "FETCH_POST",
		payload: payload,
	};
};

export const fetchPostCommets = (payload) => {
	return {
		type: "FETCH_POST_COMMENTS",
		payload: payload,
	};
};
