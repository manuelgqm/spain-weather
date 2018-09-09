import {React, Component} from "react";

class Weather extends Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      error: null
    };
  }

  componentDidMount(props) {
    const appid = "bb2e07ba2ba01365ec144453ea7ddfb5";
    fetch('http://api.openweathermap.org/data/2.5/weather?id=' + this.props.selectedLocation.id + '&appid=' + appid)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.weather
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.main} {item.description}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Weather
