import React from 'react'
import {Route} from "react-router-dom";

const Button = (props) => (
  <Route
    render={({history}) => (
      <button type="button" onClick={() => props.callback(history)}>
        Get weather
      </button>
    )}
  />
)

export default Button;
