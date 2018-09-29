import React from 'react'
import PropTypes from 'prop-types'
import { Section } from '../components/Layout'
import { NavContainer, NavItem } from '../components/HexNav'
import { Heading, Button, Content } from '../components/AboutSection'

const Home = ({ navItems, style }) => (
  <>
    <Section style={style}>
      <NavContainer size='70%'>
        {navItems.map((it, idx) => (
          <React.Fragment key={it.id}>
            {idx > 0 && idx % 3 === 0 && <div />}
            <NavItem to={`/offer/${it.id}`}>{it.name}</NavItem>
          </React.Fragment>
        ))}
      </NavContainer>
    </Section>
    <Section dark nophone style={style}>
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
  </>
)

Home.propTypes = {
  style: PropTypes.object,
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Home
