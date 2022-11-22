export const initState = {
	comments: [],
	users: [],
	posts: [],
};

const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "FETCH_USERS":
			return { ...state, users: payload };
		case "FETCH_POSTS":
			return { ...state, posts: payload };
		case "FETCH_POST_COMMENTS":
		case "FETCH_COMMENTS":
			return { ...state, comments: payload };
		case "FETCH_POST":
			return { ...state, posts: [payload] };

		default:
			break;
	}
};

export default reducer;
