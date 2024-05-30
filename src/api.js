import axios from "axios";
import { data2 } from "./data.js";

export function getData(setLoading, seData) {
	// console.log(data2.Customer_Estimate_Flow, "hello");
	setLoading(true);
	axios("/sample-data")
		.then((data) => {
			// console.log(data);
			// console.log(data.data.Customer_Estimate_Flow);
			seData(data.data.Customer_Estimate_Flow);
			setLoading(false);
		})
		.catch((error) => {
			seData(data2.Customer_Estimate_Flow);
			alert(error);
			console.log(error);
		})
		.finally(() => {
			setLoading(false);
		});
}
