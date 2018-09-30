import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'

import { IoIosPin } from 'react-icons/io'
import { Section, Button } from '../components/Layout'

import wheel from '../img/wheelofluck.png'

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

const Wheel = styled('img')`
  position: relative;
  width: 80%;
  &::before {
    content: '';
    width: 100px;
    height: 200px;
    display: block;
    left: calc(50% - 5px);
    top: 0;
    position: absolute;
    background-color: red;
  }
`

const spin = css`
  animation: spin 200ms linear 5;
  transform-origin: center center;
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

class Offer extends PureComponent {
  state = {
    offer: null,
    spinning: false
  }
  render () {
    const { zone, style } = this.props
    if (!this.state.offer) return null
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
          <div>
            <div>SPIN THE WHEEL TO GET YOUR % OFF!</div>
            <Button onClick={this.spin}>Spin the wheel!</Button>
          </div>
          <div />
        </Section>
        <Section style={style}>
          <Wheel
            className={cx({ [spin]: this.state.spinning })}
            src={wheel}
            alt='wheel'
          />
        </Section>
      </>
    )
  }

  componentDidMount () {
    fetch('/api/offers/dhaka/' + this.props.zone)
      .then(r => r.json())
      .then(reply => {
        this.setState({ offer: reply.data })
      })
  }

  spin = e => {
    e.preventDefault()
    this.setState({ spinning: true })
    setTimeout(() => {
      this.setState({ spinning: false })
    }, 1000)
  }

  static propTypes = {
    style: PropTypes.object,
    zone: PropTypes.string.isRequired
  }
}

export default Offer
