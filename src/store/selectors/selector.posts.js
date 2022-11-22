import { getUserIdsByName } from "./selector.users";

export const getPosts = (state, search = "", page = 1) => {
	if (search) {
		const userIds = getUserIdsByName(state, search);
		const posts = state.posts?.filter((post) => {
			return userIds?.includes(post.userId);
		});
		return posts?.slice(0, page * 10);
	}

	return state.posts?.slice(0, page * 10);
};

export const getPostById = (state, postId) => {
	return state.posts?.find((post) => post.id === postId);
};
