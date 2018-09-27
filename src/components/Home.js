import React from 'react'

import { NavContainer, NavItem } from './HexNav'
import { Page, Section } from './Layout'

export default p => (
  <Page>
    <Section>
      <NavContainer size='60%'>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='' hide />
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='' hide />
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/'>Home</NavItem>
      </NavContainer>
    </Section>
    <Section dark className='hide-phone'>
      About section
    </Section>
  </Page>
)
