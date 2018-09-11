import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import chaiEnzyme from 'chai-enzyme'
import { configure, shallow } from 'enzyme'

import Header from '../../src/components/Header'

// HACK: chai-enzyme does not play nice with chai-jquery, so remove the
// problem-causing assertions that collide with chai-jquery
'visible hidden selected checked enabled disabled'.split(' ').forEach((selector) => {
  Object.defineProperty(chai.Assertion.prototype, selector, { get: () => {} })
})
configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())
describe('Unit Test for Header', function(){
  context('<Header />', function(){
    it('displays header', function(){
      const component = shallow(<Header />)
      expect(component.find('h1')).to.have.text('Spain Locations Weather')
    })

  })
})
