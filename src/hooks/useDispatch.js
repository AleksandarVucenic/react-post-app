import { useContext } from "react";
import AppStateContext from "../contexts/AppContext/AppStateContext";

const useDispatch = () => {
	const { dispatch } = useContext(AppStateContext);

	return dispatch;
};

export default useDispatch;
