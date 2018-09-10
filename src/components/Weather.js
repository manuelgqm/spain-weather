import React, {Component} from "react";

class Weather extends Component {
  constructor( props ) {
    super(props);
    this.state = {
      weather: [],
      main: {},
      isLoaded: false,
      error: null
    };
  }

  componentDidMount() {
    this.fetchWeather(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.url !== nextProps.match.url) {
      this.setState({
        isLoaded: false
      });
      this.fetchWeather(nextProps.match.params.id);
    }
  }

  fetchWeather(locationId) {
    const appid = "bb2e07ba2ba01365ec144453ea7ddfb5";
    fetch('http://api.openweathermap.org/data/2.5/weather?id=' + locationId + '&appid=' + appid)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          weather: result.weather,
          main: result.main
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    );
  }

  render() {
    const { error, isLoaded, weather, main } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {weather.map(item => (
            <li key={item.id}>
              The weather is: {item.main}
            </li>
          ))}
          <li>Temperature: {main.temp}, Min: {main.temp_min}, Max: {main.temp_max}</li>
          <li>Pressure: {main.pressure}</li>
          <li>Humidity: {main.humidity}</li>
        </ul>
      );
    }
  }
}

export default Weather
