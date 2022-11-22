import "./App.css";
import { AppRoutes } from "./routes/Routes";
import Wrapper from "./components/Layout/Wrapper";

function App() {
	return (
		<Wrapper>
			<AppRoutes />
		</Wrapper>
	);
}

export default App;
