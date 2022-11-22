import { useContext, useEffect, useReducer } from "react";
import { fetchUsers } from "../../store/actions/actions";
import reducer, { initState } from "../../store/reducers/reducer";
import AppStateContext from "./AppStateContext";

export const useAppStore = () => useContext(AppStateContext);

const AppStateContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((result) => result.json())
			.then((result) => {
				dispatch(fetchUsers(result));
			});
	}, []);

	return (
		<AppStateContext.Provider value={{ state, dispatch }}>
			{children}
		</AppStateContext.Provider>
	);
};

export default AppStateContextProvider;
