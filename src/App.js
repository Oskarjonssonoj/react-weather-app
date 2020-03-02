import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';


class App extends React.Component {
	constructor(){
		super()
		this.state = {
			errorMessage: false,
			report: true,
			city: "",
			country: "",
			temperature: "",
			humidity: ""
		}
	}

	getWeather = async (id) => {
		const APIKey = "a9f6719e37f20890ebff5d91724dec1f";
		const call = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${id}&units=metric&appid=${APIKey}`
		);
		const response = await call.json();
		console.log(response);

		this.setState({
			city: response.name,
			temperature: response.main.temp,
			humidity: response.main.humidity
		})
	};

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity item={this.state} getWeather={this.getWeather}/>

					{
						this.state.report
						? (
							<WeatherReport item={this.state}/>
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
