import React from 'react'
import styled from 'react-emotion'

import {Link} from '@reach/router'

import { NavContainer, NavItem, hidden } from '../components/HexNav'
import { Page, Section } from '../components/Layout'

const Heading = styled('h1')`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 900;
  font-size: 4em;
  color: #fefefe;
  text-transform: uppercase;
`

const Button = styled(Link)`
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  padding: 10px;
  border: solid 2px #fff;
  color: #fff;
  transition: all 250ms ease;

  &:hover {
    color: #fff;
    filter: invert(1);
  }
`

export default p => (
  <Page>
    <Section>
      <NavContainer size='60%'>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/'>Home</NavItem>
        <div className={hidden} />
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/'>Home</NavItem>
        <div className={hidden} />
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/'>Home</NavItem>
      </NavContainer>
    </Section>
    <Section dark className='hide-phone'>
      <Heading>CHOMOK</Heading>
      <Button to='/about'>Learn more!</Button>
    </Section>
  </Page>
)
