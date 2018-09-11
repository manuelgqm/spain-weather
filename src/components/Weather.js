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
              <img src={"http://openweathermap.org/img/w/" + item.icon + ".png"} style={{'vertical-align': 'middle'}}/>
            </li>
          ))}
          <li>Temperature: <span id="mainTemp">{main.temp}</span>, Min: <span id="minTemp">{main.temp_min}</span>, Max: <span id="maxTemp">{main.temp_max}</span></li>
          <li>Pressure: <span id="pressure">{main.pressure}</span></li>
          <li>Humidity: <span id="humidity">{main.humidity}</span></li>
        </ul>
      );
    }
  }
}

export default Weather
