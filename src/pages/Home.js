import React, { Fragment } from 'react'

import { Section } from '../components/Layout'
import { NavContainer, NavItem } from '../components/HexNav'
import { Heading, Button, Content } from '../components/AboutSection'

export default p => (
  <Fragment>
    <Section style={p.style}>
      <NavContainer size='70%'>
        <NavItem to='/dhanmondi'>Dhanmondi</NavItem>
        <NavItem to='/zigatola'>Zigatola</NavItem>
        <div />
        <NavItem to='/banani'>Banani</NavItem>
        <NavItem to='/gulshan'>Gulshan</NavItem>
        <div />
        <NavItem to='/mohammadpur'>Mohammadpur</NavItem>
      </NavContainer>
    </Section>
    <Section dark nophone style={p.style}>
      <Heading>CHOMOK</Heading>
      <Content>
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. ALIQUAM LAOREET
        ARCU URNA, ET PORTA IPSUM ULLAMCORPER VEL. IN BLANDIT ULTRICES ARCU, AC
        BLANDIT EX MATTIS EU. AENEAN MALESUADA LUCTUS ERAT IN LUCTUS. UT
        ULLAMCORPER DICTUM ACCUMSAN. DONEC SED LAOREET URNA. ETIAM VESTIBULUM
        RUTRUM LACUS. MAECENAS RISUS TORTOR, PULVINAR AC FINIBUS UT, LOBORTIS
        EGET JUSTO. FUSCE ULTRICES ENIM VEL IPSUM BIBENDUM, SED ACCUMSAN METUS
        DICTUM.
      </Content>
      <Button to='/about'>Learn more!</Button>
    </Section>
  </Fragment>
)
