import React from 'react'
import CartItem from './cartItem'

describe('<CartItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CartItem />)
  })
})