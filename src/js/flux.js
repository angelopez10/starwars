const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			url: ''
		},
		actions: {


			fetchPeople: (url) => {

				fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json()
					})
					.then(data => {
						setStore({ people: data.results });

					})
					.catch(error => {
						console.log(error);
					});
			},

			fetchPlanets: (url) => {

				fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json()
					})
					.then(data => {
						console.log(data)
						setStore({ planets: data.results });
					})
					.catch(error => {
						console.log(error);
					});
			},

			fetchVehicles: (url) => {

				fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json()
					})
					.then(data => {
						console.log(data)

						setStore({ vehicles: data.results });

					})
					.catch(error => {
						console.log(error);
					});
			},

			addCards: (e) => {
				const store = getStore();

				store.people.map((item) => {
					let value = Object.values(item)
					if (store.favorites.includes(item) === false) {
						if (e.target.id === value[0].split(" ").join("-").toLowerCase()) {
							setStore({ favorites: store.favorites.concat(item) })
						}
					}
				})
				store.planets.map((item) => {
					let value = Object.values(item)

					if (store.favorites.includes(item) === false) {
						if (e.target.id === value[0].split(" ").join("-").toLowerCase()) {
							setStore({ favorites: store.favorites.concat(item) })
						}
					}
				})
				store.vehicles.map((item) => {
					let value = Object.values(item)

					if (store.favorites.includes(item) === false) {
						if (e.target.id === value[0].split(" ").join("-").toLowerCase()) {
							setStore({ favorites: store.favorites.concat(item) })
						}
					}
				})
				console.log(store.favorites);
			}
		}
	}


}


export default getState;