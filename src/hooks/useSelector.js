import { useAppStore } from "../contexts/AppContext/AppStateContextProvider";

const useSelector = (callback) => {
	const { state } = useAppStore();
	let data = callback(state);
	return data;
};

export default useSelector;
