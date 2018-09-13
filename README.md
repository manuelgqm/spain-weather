# Spain Weater APP

## Specifications
Based on https://openweathermap.org/api, develop a
Javascript app that allows the user to select a location in
Spain and navigate to a page where the current weather for
that location is displayed.
Locations should be displayed in alphabetical order (feel
free to use whatever component that is useful for this), and
have a search text box with autocomplete feature.
Please provide any technical information that is useful to
install, run and test the app.

## Install
To install, type on command line inside project's folder.
`yarn install`

## Run
To run the develop server use:
`yarn start` page will be available in [http://localhost:3000](http://localhost:3000)

## Test
Test uses cypress.
- To run complete GUI cypress solution use:
  `npx cypress open`, it will open test browser, just click over the test you want
  to run and cypress will open a browser window for you with the test runner. You
  can also run all specs by click on the "Run all specs button".
- Or if you prefer a terminal output use:
  `npx cypress run`

## Utils
- Run getSpainLocations.sh to extract only Spain locations of locations.list.min.json.
This file could be downloaded from
[http://bulk.openweathermap.org/sample/city.list.min.json.gz](http://bulk.openweathermap.org/sample/city.list.min.json.gz)
