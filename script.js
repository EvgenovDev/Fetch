const getData = (url) => {
	fetch(url)
		.then((response) => response.json())
		.catch((error) => console.log(error))
		.then((data) => {
			sendData({
				url: "https://jsonplaceholder.typicode.com/posts",
				file: JSON.stringify(data),
				method: "POST",
				header: {
					'Content-type': 'application/json; charset=UTF-8'
				}
			});
		})
};

const sendData = ({
	url,
	method,
	header,
	file
}) => {
	fetch(url, {
			method: method,
			headers: header,
			body: file
		})
		.then((response) => response.json())
		.catch((error) => console.log(error))
		.then((data) => console.log(data));
};

getData("./db.json");