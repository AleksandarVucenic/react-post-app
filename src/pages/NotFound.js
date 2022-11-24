import { useEffect } from "react";
import withLogger from "../HOC/withLogger";

const NotFound = (props) => {
	useEffect(() => {
		console.log(`${props.helloMessage} Not Found`);
	}, [props]);

	return <div>Not Found</div>;
};

export default withLogger(NotFound);
