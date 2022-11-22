export const fetchData = (url, method = "GET", body = {}) => {
	let data = [];

	let options = {
		method: method,
		headers: {
			Accept: "application/json",
		},
		mode: "cors",
		cache: "default",
		body: JSON.stringify(body),
	};

	fetch(url, options)
		.then((result) => {
			return result.json();
		})
		.then((result) => {
			return result;
		})
		.catch((error) => {
			alert(error);
			throw new Error(error);
		});
	// const getData = async () => {
	// 	const result = await fetch(url, options);
	// 	const data = await result.json();
	// };
	// const result = await fetch(url, options);
	// const data = await result.json();

	return data;
};
