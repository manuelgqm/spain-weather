import React, {Component} from "react";
import Select from "react-virtualized-select";
import {Route} from "react-router-dom";
import spainLocatios from "../data/spainLocations.json"

import "react-select/dist/react-select.css";
import "react-virtualized-select/styles.css";

const Button = (props) => (
  <Route
    render={({history}) => (
      <button type="button" onClick={() => props.callback(history)}>
        Get weather
      </button>
    )}
  />
)

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLocation: null
    };
  }

  handleChange = selectedLocation => {
    this.setState({selectedLocation});
  }

  showLocationWeather = (history) => {
    if (this.state.selectedLocation) {
      history.push('/locationWeather/' + this.state.selectedLocation.id);
    }
  }

  render() {
    const {selectedLocation} = this.state;
    return (
      <main>
        <Select
          autoFocus
          options={spainLocatios}
          onChange={selectedLocation => this.handleChange(selectedLocation)}
          value={selectedLocation}
          className="locationSelect"
        />
        <Button callback={this.showLocationWeather} />
      </main>
    )
  }
}

export default Main;
