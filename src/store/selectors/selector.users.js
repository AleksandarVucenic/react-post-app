export const getUserById = (state, userId) => {
	return state.users?.find((user) => user.id === userId);
};

export const getUserByEmail = (state, userEmail) => {
	return state.users?.find((user) => user.email === userEmail);
};

export const getUserIdsByName = (state, userName) => {
	const users = state.users?.filter((user) => {
		return user.name.includes(userName);
	});

	return users.map((user) => {
		return user.id;
	});
};
