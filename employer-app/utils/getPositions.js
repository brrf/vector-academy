export default function getPositions() {
	return new Promise( (resolve, reject) => {
		fetch(`${PROTOCOL}${DOMAIN}/getpositions`, {
			method: "GET",
			headers: { 
			"Content-Type": "application/json",
			},
			mode: "cors",
			credentials: "include"
			})
		.then(res => res.json())
		.then(resObject => {
			if (resObject.errors) {
				console.log(resObject.errors);
			} else {
				resolve(resObject.positionList);
			}
		})
	});
}