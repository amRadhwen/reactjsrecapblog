import { useState, useEffect } from "react";

const useFetch = (url) =>{

	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(()=>{

		const abortCont = new AbortController();

		setTimeout(()=> {
			fetch(url, {signal: abortCont.Signal})
		.then(res=> {
			if(!res.ok) {
				throw Error("Could not fetch data from that resource !!!");
			}
			return res.json();
		})
		.then(data=>{
			setData(data);
			setLoading(false);
			setError(false);
		})
		.catch(err=> {
			if(err.name === "AbortError") {
				console.log("Fetch Aborted !");
			}
			else {
				setError(err.message)
				setLoading(false);
			}
		});
		}, 1000);

		return ()=> abortCont.abort();

	}, []);
	return {data, loading, error, setData};
}

export default useFetch;