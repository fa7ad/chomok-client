import React from 'react'
import styled from 'react-emotion'

import { Link } from '@reach/router'

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
  background-size: 100% 200%;
  background-image: linear-gradient(to bottom, transparent 50%, white 50%);

  &:hover {
    color: #333;
    background-position: 0 -100%;
  }
`

export default p => (
  <Page>
    <Section>
      <NavContainer size='70%'>
        <NavItem to='/dhanmondi'>Dhanmondi</NavItem>
        <NavItem to='/zigatola'>Zigatola</NavItem>
        <div className={hidden} />
        <NavItem to='/banani'>Banani</NavItem>
        <NavItem to='/gulshan'>Gulshan</NavItem>
        <div className={hidden} />
        <NavItem to='/mohammadpur'>Mohammadpur</NavItem>
      </NavContainer>
    </Section>
    <Section dark className='hide-phone'>
      <Heading>CHOMOK</Heading>
      <Button to='/about'>Learn more!</Button>
    </Section>
  </Page>
)
