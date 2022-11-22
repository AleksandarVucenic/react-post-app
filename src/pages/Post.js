import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CommentsList from "../components/Comments/CommentsList";
import PostItem from "../components/Posts/Post";
import useDispatch from "../hooks/useDispatch";
import useSelector from "../hooks/useSelector";
import { fetchPost, fetchPostCommets } from "../store/actions/actions";
import { getPostById } from "../store/selectors/selector.posts";

const Post = () => {
	const { id } = useParams();
	const postId = Number(id);
	const post = useSelector((state) => getPostById(state, postId));
	const dispatch = useDispatch();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((result) => result.json())
			.then((result) => {
				dispatch(fetchPost(result));
			});

		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
			.then((result) => result.json())
			.then((result) => {
				dispatch(fetchPostCommets(result));
			});
	}, [dispatch, postId]);

	return (
		<>
			<div className="row">
				<div className="col-8">
					{post ? (
						<>
							<PostItem post={post} />
							<CommentsList postId={post.id} />
						</>
					) : null}
				</div>
				<div className="col-4">
					<Link to="/posts" className="mb-2">
						<button type="button" className="btn btn-primary">
							Back to Posts
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Post;
