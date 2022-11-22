import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppStateContext from "../contexts/AppContext/AppStateContext";
import Posts from "./Posts";
describe(`PostsPage`, () => {
	let state, dispatch;

	beforeAll(() => {
		dispatch = jest.fn();
		state = {
			posts: [
				{ id: 1, title: "Post1", body: "Post body1", userId: 1 },
				{ id: 2, title: "Post2", body: "Post body2", userId: 2 },
			],
			users: [
				{ id: 1, name: "John Smith", email: "john@smith.com" },
				{ id: 2, name: "Mona Lisa", email: "mona@lisa.com" },
			],
			comments: [
				{
					postId: 1,
					id: 1,
					name: "Comment post1",
					body: "Comment body1",
				},
				{
					postId: 1,
					id: 2,
					name: "Comment post2",
					body: "Comment body2",
				},
			],
		};
	});

	const renderComponent = () => {
		render(
			<AppStateContext.Provider value={{ state, dispatch }}>
				<BrowserRouter>
					<Posts />
				</BrowserRouter>
			</AppStateContext.Provider>
		);
	};
	it("Render posts", () => {
		renderComponent();

		const postName = screen.getByText("Post1");
		expect(postName).toBeInTheDocument();

		const postName2 = screen.getByText("Post2");
		expect(postName2).toBeInTheDocument();

		const postBody = screen.getByText("Post body1");
		expect(postBody).toBeInTheDocument();

		const comments = screen.getByText("Comments: 2");
		expect(comments).toBeInTheDocument();

		const author = screen.getByText("Author: John Smith");
		expect(author).toBeInTheDocument();
	});

	it("Search post", () => {
		renderComponent();
		const searchInput = screen.getByTestId("search-input");

		expect(screen.getByText("Post1")).toBeInTheDocument();
		expect(screen.getByText("Post1")).toBeInTheDocument();

		fireEvent.change(searchInput, {
			target: { value: "Mon" },
		});

		expect(screen.getByText("Post2")).toBeInTheDocument();
		expect(screen.queryByText("Post1")).not.toBeInTheDocument();

		fireEvent.change(searchInput, {
			target: { value: "Joh" },
		});

		expect(screen.queryByText("Post2")).not.toBeInTheDocument();
		expect(screen.getByText("Post1")).toBeInTheDocument();
	});
});
