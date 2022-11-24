import React, { useCallback, useEffect, useState } from "react";
import PostList from "../components/Posts/PostList";
import SearchInput from "../components/Search/SearchInput";
import useDispatch from "../hooks/useDispatch";
import { fetchComments, fetchPosts } from "../store/actions/actions";
import withLogger from "../HOC/withLogger";

const Posts = ({ helloMessage }) => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState(() => "");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((result) => result.json())
			.then((result) => {
				dispatch(fetchPosts(result));
			});

		fetch("https://jsonplaceholder.typicode.com/comments")
			.then((result) => result.json())
			.then((result) => {
				dispatch(fetchComments(result));
			});
	}, [dispatch]);

	useEffect(() => {
		console.log(`${helloMessage} Posts Page`);
	}, [helloMessage]);

	const onSearch = useCallback((searchName) => {
		setSearch(searchName);
	}, []);

	return (
		<>
			<div className="row mb-3">
				<div className="col">
					<SearchInput onChange={onSearch} />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<PostList search={search} />
				</div>
			</div>
		</>
	);
};

export default withLogger(Posts);
