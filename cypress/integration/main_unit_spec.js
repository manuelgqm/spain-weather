import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import chaiEnzyme from 'chai-enzyme'
import { configure, mount } from 'enzyme'
import { MemoryRouter } from 'react-router';

import Main from '../../src/components/Main'

// HACK: chai-enzyme does not play nice with chai-jquery, so remove the
// problem-causing assertions that collide with chai-jquery
'visible hidden selected checked enabled disabled'.split(' ').forEach((selector) => {
  Object.defineProperty(chai.Assertion.prototype, selector, { get: () => {} })
})

configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

describe('Main component', () => {
  let mainWrapper;
  beforeEach(() => {
      mainWrapper = mount(
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      ).find('Main');
  });

  it('displays select and button', () => {
    expect(mainWrapper.find('Select').length).to.equal(1);
    expect(mainWrapper.find('Button').length).to.equal(1);
  });

  it('starts with no location selected', () => {
    expect(mainWrapper.state.selectedLocation).to.not.be.ok;
  });

  it('handles location change', () => {
    const main = mainWrapper.instance();
    const selectedLocation = {};

    main.handleChange(selectedLocation);

    expect(main.state.selectedLocation).to.deep.equal(selectedLocation);
  });

  it('goes nowhere if no location selected', () => {
    const main = mainWrapper.instance();
    const newLocation = main.showLocationWeather();
    main.state.selectedLocation = null;

    expect(newLocation).to.equal("/");
  });

  it('goes to locationWeather when location selected', () => {
    const main = mainWrapper.instance();
    const selectedLocation = { id: 0 };
    const historyMock = { push: cy.stub() };
    main.state.selectedLocation = selectedLocation;

    const newLocation = main.showLocationWeather(historyMock);

    expect(newLocation).to.equal('/locationWeather/0');
  });

});
