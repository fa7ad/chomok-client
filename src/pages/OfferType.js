import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import { map, filter, keys } from 'ramda'

import { Section, button } from '../components/Layout'

class OfferType extends React.PureComponent {
  state = {
    types: []
  }

  render () {
    const { style, zone } = this.props
    return (
      <Section style={style} dark>
        {this.state.types.map((type, idx) => (
          <Link className={button} to={`/offer/${zone}/${type.key}`} key={idx}>
            {type.caption.toUpperCase()}
          </Link>
        ))}
      </Section>
    )
  }

  componentDidMount () {
    fetch('/api/offers/dhaka/' + this.props.zone)
      .then(r => r.json())
      .then(reply => {
        if (!reply.ok) return this.setState({ types: [] })
        const { offers } = reply.data
        const dict = {
          perc: 'Percentage Off',
          special: 'Special Offer',
          bulk: 'Bulk Discount'
        }
        const types = keys(filter(el => el, offers))
        this.setState({
          types: map(el => ({ key: el, caption: dict[el] }), types)
        })
      })
  }

  static propTypes = {
    style: PropTypes.object,
    zone: PropTypes.string
  }
}

export default OfferType
