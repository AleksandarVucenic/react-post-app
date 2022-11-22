import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppStateContext from "../contexts/AppContext/AppStateContext";
import Post from "./Post";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useParams: () => ({
		id: 1,
	}),
	useRouteMatch: () => ({ url: "/post/1" }),
}));

describe(`PostsPage`, () => {
	let state, dispatch;

	beforeAll(() => {
		dispatch = jest.fn();
		state = {
			posts: [{ id: 1, title: "Post1", body: "Post body1", userId: 1 }],
			users: [{ id: 1, name: "John Smith", email: "john@smith.com" }],
			comments: [
				{
					postId: 1,
					id: 1,
					name: "Comment post1",
					body: "Comment body1",
					email: "captain.america@avengers.com",
				},
				{
					postId: 1,
					id: 2,
					name: "Comment post2",
					body: "Comment body2",
					email: "iron.man@avengers.com",
				},
			],
		};
	});

	const renderComponent = () => {
		render(
			<AppStateContext.Provider value={{ state, dispatch }}>
				<BrowserRouter>
					<Post />
				</BrowserRouter>
			</AppStateContext.Provider>
		);
	};

	it("Render posts", () => {
		renderComponent();

		expect(screen.getByText("Post1")).toBeInTheDocument();
		expect(screen.getByText("Post body1")).toBeInTheDocument();
		expect(screen.getByText("Comments: 2")).toBeInTheDocument();
		expect(screen.getByText("Comment post1")).toBeInTheDocument();
		expect(screen.getByText("Comment post2")).toBeInTheDocument();
		expect(
			screen.getByText("captain.america@avengers.com")
		).toBeInTheDocument();
		expect(screen.getByText("iron.man@avengers.com")).toBeInTheDocument();
	});
});
