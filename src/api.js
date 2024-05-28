import axios from "axios";

export function getData(setLoading, seData) {
	setLoading(true);
	axios("http://test.api.boxigo.in/sample-data/")
		.then((data) => {
			// console.log(data.data.Customer_Estimate_Flow);
			seData(data.data.Customer_Estimate_Flow);
			setLoading(false);
		})
		.catch((error) => {
			alert("Some thing went wrong.");
			console.log(error);
		})
		.finally(() => {
			setLoading(false);
		});
}
