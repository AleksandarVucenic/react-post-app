import { useEffect, useState } from "react";

const useFetch = (url, method = "GET", body = false) => {
	const [data, setData] = useState();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const requestOptions = {
				method: method,
				headers: { "Content-Type": "application/json" },
				body: body ? JSON.stringify(body) : null,
			};
			const response = await fetch(url, requestOptions);
			const data = await response.json();

			setData(data);
			setLoading(false);
		};

		fetchData().catch((err) => {
			setError(err);
			setLoading(err);
		});
	}, [body, method, url]);

	return {
		data,
		error,
		loading,
	};
};

export default useFetch;
