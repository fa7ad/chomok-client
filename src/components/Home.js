import React from 'react'
import styled from 'react-emotion'

import { NavContainer, NavItem } from './HexNav'

const Page = styled('div')`
  flex-basis: 100%;

  display: flex;
  flex-direction: row;
  align-items: stretch;

  @media screen and (max-width: 480px) {
    .hide-phone {
      display: none;
    }
  }
`

const Section = styled('section')`
  flex-basis: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;

  @media (max-width: 480px) {
    flex-basis: 100%;
  }

  background: ${p => (p.dark ? 'rgba(0, 0, 0, 0.45)' : 'transparent')};

  &:hover {
    background: ${p => (p.dark ? 'rgba(0, 0, 0, 0.6)' : 'transparent')};
  }
`

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
    <Section dark className='hide-phone'>About section</Section>
  </Page>
)
