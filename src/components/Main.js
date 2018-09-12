import React, {Component} from "react";
import Select from "react-virtualized-select";
import spainLocatios from "../data/spainLocations.json"
import Button from './Button'

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
    let newUrl = '/';
    if (!this.state.selectedLocation) {
      return newUrl;
    }
    newUrl = '/locationWeather/' + this.state.selectedLocation.id;
    history.push(newUrl);
    return newUrl;
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
