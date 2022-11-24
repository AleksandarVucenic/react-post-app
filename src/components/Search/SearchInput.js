import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import withLogger from "../../HOC/withLogger";

const SearchInput = ({ onChange, helloMessage }) => {
	const searchRef = useRef();

	const onSearch = () => {
		onChange(searchRef.current.value);
	};

	useEffect(() => {
		console.log(`${helloMessage} Search Input`);
	}, [helloMessage]);

	return (
		<div className="form-group">
			<input
				type="text"
				className="form-control"
				placeholder="Search ..."
				ref={searchRef}
				onChange={onSearch}
				data-testid="search-input"
			/>
		</div>
	);
};

SearchInput.propTypes = {
	onChange: PropTypes.func,
};

export default withLogger(SearchInput);
