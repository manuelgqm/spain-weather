import React, {Component} from "react";
import Select from "react-virtualized-select";
import spainLocatios from "../data/spainLocations.json"
import Button from './Button'

import "react-select/dist/react-select.css";
import "react-virtualized-select/styles.css";

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
