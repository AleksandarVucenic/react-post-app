import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppStateContextProvider from "../contexts/AppContext/AppStateContextProvider";
import { Home, NotFound, Post, Posts } from "../pages";

export const AppRoutes = () => (
	<AppStateContextProvider>
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/post/:id" element={<Post />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</AppStateContextProvider>
);
