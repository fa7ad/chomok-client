import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

import { IoIosPin } from 'react-icons/io'

import { Section } from '../components/Layout'

const jcsb = css`
  &&& {
    justify-content: space-between;
  }
`

const Zone = styled('div')`
  font-size: 1.2em;
  text-transform: uppercase;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  span {
    font-weight: 300;
    font-size: 1.1em;
  }
`

const HexImg = styled('img')`
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-image: url(${p => p['data-bg']});
  min-height: ${p => p['data-size']};
  width: ${p => p['data-size']};
  background-position: center center;
  background-size: cover;
  &:hover {
    background-size: 150%;
  }
`

class Offer extends PureComponent {
  render () {
    const { zone, style } = this.props
    return (
      <>
        <Section dark style={style} className={jcsb}>
          <Zone>
            <IoIosPin />
            <span>{zone}</span>
          </Zone>
          <HexImg
            src={this.state.offer.image}
            alt={this.state.offer.partner.name}
          />
        </Section>
        <Section style={style}>b</Section>
      </>
    )
  }

  static propTypes = {
    style: PropTypes.object,
    zone: PropTypes.string.isRequired
  }
}

export default Offer
