import { useEffect } from "react";
import withLogger from "../../HOC/withLogger";

const Wrapper = ({ children, helloMessage }) => {
	useEffect(() => {
		console.log(`${helloMessage} Wrapper`);
	}, [helloMessage]);
	return <div className="container pt-5">{children}</div>;
};

export default withLogger(Wrapper);
