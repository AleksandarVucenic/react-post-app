import { useRef } from "react";
import PropTypes from "prop-types";

const SearchInput = ({ onChange }) => {
	const searchRef = useRef();

	const onSearch = () => {
		onChange(searchRef.current.value);
	};

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

export default SearchInput;
