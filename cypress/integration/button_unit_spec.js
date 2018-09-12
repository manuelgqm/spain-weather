import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import chaiEnzyme from 'chai-enzyme'
import { configure, shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router';

import Button from '../../src/components/Button'

// HACK: chai-enzyme does not play nice with chai-jquery, so remove the
// problem-causing assertions that collide with chai-jquery
'visible hidden selected checked enabled disabled'.split(' ').forEach((selector) => {
  Object.defineProperty(chai.Assertion.prototype, selector, { get: () => {} })
})

configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

describe('Unit Test for Button', function(){
  it('displays button', function(){
    const component = mount(
      <MemoryRouter>
        <Button />
      </MemoryRouter>
    );
    expect(component.find('button')).to.be.present();
  });

  it('clicks button', function(){
    const callback = cy.stub();
    const component = mount(
      <MemoryRouter>
        <Button callback={callback}/>
      </MemoryRouter>
    );
    component.find('button').simulate('click');
    expect(callback).to.be.called;
  });

})
