const getData = (url, method) => {
	let xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.responseType = "json";
	xhr.send();
	xhr.addEventListener("load", (e) => {
		if (xhr.status != 200) {
			console.log(`Что-то пошло не так, ошибка: ${xhr.status} - ${xhr.statusText}`);
		} else {
			sendData({
				method: "POST",
				data: xhr.response,
				url: "https://jsonplaceholder.typicode.com/posts"
			});
		}
	});
};

const sendData = ({
	data,
	url,
	method
}) => {
	let xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
	xhr.send(JSON.stringify(data));
	xhr.addEventListener("load", (e) => {
		if (xhr.status != 201) {
			console.log(`Ошибка: ${xhr.status} - ${xhr.statusText}`);
		} else {
			console.log(xhr.response);
		}
	});
};

getData("./db.json", "GET");