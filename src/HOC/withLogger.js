const withLogger = (Component) => (props) => {
	const helloMessage = "Hello from";

	return <Component helloMessage={helloMessage} {...props} />;
};

export default withLogger;
