import './App.css';

// Import default styles.
// This only needs to be done once; probably during bootstrapping process.
import "react-select/dist/react-select.css";
import "react-virtualized-select/styles.css";

import React, {Component} from "react";
import Select from "react-virtualized-select";
import spainLocatios from "../data/spainLocations.json"
import Weather from "./Weather"

const Button = (props) => (
  <button onClick={props.handleClick}>Get weather</button>
);

const Content = (props) => {
  if (props.selectedLocation) {
    return <Weather selectedLocation={props.selectedLocation} />
  }
  return <div>No data yet</div>
}

// class Weather extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//       error: null
//     };
//   }
//
//   componentDidMount(props) {
//     const appid = "bb2e07ba2ba01365ec144453ea7ddfb5";
//     fetch('http://api.openweathermap.org/data/2.5/weather?id=' + this.props.selectedLocation.id + '&appid=' + appid)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.weather
//           });
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           })
//         }
//       );
//   }
//
//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.id}>
//               {item.main} {item.description}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedLocation: null
    };

  }

  handleChange = selectedLocation => {
    this.setState({selectedLocation});
  }

  render() {
    const {selectedLocation, weather} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Select
          autoFocus
          options={spainLocatios}
          onChange={selectedLocation => this.handleChange(selectedLocation)}
          value={selectedLocation}
        />
        {/* <Button handleClick={this.showWeather}/> */}
        <Content selectedLocation={selectedLocation} />
        {/* <Weather locationId={selectedLocation} /> */}
        <div>{weather} </div>
      </div>
    );
  }
}

export default App;
