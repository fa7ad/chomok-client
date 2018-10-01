import { IoIosPin, IoIosArrowRoundDown } from 'react-icons/io'
import styled, { css, cx } from 'react-emotion'

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

const HexImg = styled('div')`
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  min-height: ${p => p['data-size']};
  width: ${p => p['data-size']};
  background-image: ${p => `url(${p['data-bg']})`};
  background-position: center center;
  background-size: 100%;
  transition: background-size 150ms ease;
  &:hover {
    background-size: 120%;
  }
`

const Wheel = styled('img')`
  position: relative;
  width: 80%;
  transform: rotate(143deg);
`

const WheelWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WheelPin = styled(IoIosArrowRoundDown)`
  position: relative;
  top: 42px;
  z-index: 2
`

const spin = css`
  animation: spin 200ms linear 5;
  transform-origin: center center;
  @keyframes spin {
    from {
      transform: rotate(143deg);
    }
    to {
      transform: rotate(503deg);
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
          <HexImg data-bg={this.state.offer.image} data-size='360px' />
          <div>
            <div>SPIN THE WHEEL TO GET YOUR % OFF!</div>
            <Button onClick={this.spin}>Spin the wheel!</Button>
          </div>
          <div />
          <div />
          <div />
        </Section>
        <Section style={style}>
          <WheelWrapper>
            <WheelPin color='#ff1744' size={72} />
            <Wheel
              className={cx({ [spin]: this.state.spinning })}
              src={wheel}
              alt='wheel'
              onAnimationEnd={this.stopSpin}
            />
          </WheelWrapper>
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
  }

  stopSpin = e => {
    this.setState({ spinning: false })
  }

  static propTypes = {
    style: PropTypes.object,
    zone: PropTypes.string.isRequired
  }
}

export default Offer
