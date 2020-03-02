import React from 'react';

class SearchCity extends React.Component {

	state = {
		cityName: '',
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.getWeather(this.state.cityName);

		this.setState({
			cityName: '',
		});
	}

	handleChange = (e) => {
		
		this.setState({
			cityName: e.target.value,
		});
	}

	render() {
		return (
			<div id="SearchCity" className="mb-5">
				<form onSubmit={this.handleSubmit}>
					<div className="input-group">
						<input 
							type="text" 
							className="form-control form-control-lg" 
							id="city" 
							onChange={this.handleChange}
							value={this.state.cityName}
						/>

						<div className="input-group-append">
							<button className="btn btn-success btn-lg">Search</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchCity;
