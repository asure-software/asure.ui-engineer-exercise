import React from "react";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			isLoaded: false,
		};
	}

	/**
	 * componentDidMount
	 *
	 * Fetch json array of objects from given url and update state.
	 */
	componentDidMount() {
		fetch(
			"https://colorful-halibut.glitch.me/api/v1/businesses/search?location=austin&term=tacos"
		)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					isLoaded: true,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	/**
	 * render
	 *
	 * Render UI
	 */
	render() {
		const { isLoaded, items } = this.state;

		if (!isLoaded) return <div>Loading...</div>;
		console.log(items);

		return (
			<div className="App">
				<div className="flex-container">
					{items.businesses.map((item) => (
                        <div key={item.id} className="flex-item">
                            <img src={item.image_url} alt="taco business"></img>
                            <span className="name">Name: {item.name}</span>
                            <span className="rating">Rating: {item.rating}</span>
                            <span className="price">Price: {item.price}</span>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default App;
