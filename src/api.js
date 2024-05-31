import axios from "axios";


export function getData(setLoading, seData) {
	// console.log(data2.Customer_Estimate_Flow, "hello");
	setLoading(true);
	axios("https://boxigo-backend.onrender.com/api/sample-data")
		.then((data) => {
			// console.log(data);
			// console.log(data.data.Customer_Estimate_Flow);
			seData(data.data.Customer_Estimate_Flow);
			setLoading(false);
		})
		.catch((error) => {
			alert(error);
		})
		.finally(() => {
			setLoading(false);
		});
}
