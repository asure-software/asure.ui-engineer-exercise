import React from "react";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			isLoaded: false,
			city: "",
		};

	}

	changeHandler = (event) => {
		this.setState({
			city: event.target.value,
        });
        console.log(this.state.city);
	};

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

	render() {
		const { isLoaded, items } = this.state;

		if (!isLoaded) return <div>Loading...</div>;
		console.log(items);

		return (
			<div className="App">
				<header>
					<h1>Taco Hunter</h1>
					<form>
						<input
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.changeHandler}
						/>
						<button className="button" onClick={this.handleClick}>
							Find Tacos
						</button>
					</form>
				</header>
				<div className="flex-container">
					{items.businesses.map((item) => (
						<div key={item.id} className="flex-item">
							<img src={item.image_url} alt="taco business"></img>
							<span className="name">{item.name}</span>
							<span className="rating">
								Rating: {item.rating}
							</span>
							<span className="price">Price: {item.price}</span>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default App;
