import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import axios from 'axios';


class App extends React.Component {
	constructor(){
		super()
		this.state = {
			errorMessage: false,
			errorMessageTxt: "",
			report: false,
			city: "",
			temperature: "",
			humidity: "",
			description: "",
			icon: "",
		}
	}
	
	getWeather = (id) => {
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${id}&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f`)
		.then(response =>{
			this.setState({
				report: true,
				errorMessage: false,
				city: response.data.name,
				temperature: response.data.main.temp,
				humidity: response.data.main.humidity,
				description: response.data.weather[0].description,
				icon: response.data.weather[0].icon
			});
		}).catch(error => {
			console.log("This is not a valid city name")
			this.setState({
				report: false,
				errorMessage: true,
				errorMessageTxt: id
			})

			if(this.errorMessage) {
				console.log("This is not a valid city name")
			}
		})

	}

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
						: ""
					}

					{
						this.state.errorMessage 
						? (
							<p className="alert alert-warning">Oh, sorry, something went wrong. You sure that "<span className="errorMsg">{this.state.errorMessageTxt}</span>" actually exists?</p>
						)
						: ""
					}
				</div>
			</div>
		)
	}
}

export default App;
