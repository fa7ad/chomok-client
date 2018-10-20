import React from 'react'
import styled from 'react-emotion'
import QrReader from 'react-qr-reader'
import { navigate } from '@reach/router'
import { Button, Input, Modal } from 'antd'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  > div {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .result pre {
    font-size: 16px;
    color: #111;
    text-align: left;
  }
`

function showQR (data) {
  const dict = {
    perc: 'Percentage Off',
    special: 'Special Offer',
    bulk: 'Bulk Discount'
  }
  Modal.info({
    title: 'Valid code found!',
    content: (
      <>
        <h1>Value: {data.value}</h1>
        <h3>Type: {dict[data.offertype]}</h3>
        <h3>Validity: {data.validity}</h3>
      </>
    )
  })
}

class PartnerScan extends React.PureComponent {
  state = {
    delay: 100,
    legacy: false,
    manual: ''
  }

  qr = React.createRef()

  handleScan = code => {
    if (code) {
      fetch(`/api/codes/${code.replace('chomok://', '')}`, {
        method: 'POST',
        credentials: 'include'
      })
        .then(r => {
          if (r.status === 403 || r.status === 401) {
            navigate('/login')
            throw new Error('Unauthorized')
          }
          return r.json()
        })
        .then(res => {
          if (res.ok) {
            showQR(res.data)
          } else throw new Error('Invalid code')
        })
        .catch(e => {
          console.error(e)
        })
    }
  }

  openImageDialog = e => {
    this.qr.current.openImageDialog()
  }

  render () {
    const previewStyle = {
      width: '90%',
      maxWidth: '480px',
      margin: '0 auto'
    }

    return (
      <Container>
        <div className='result'>
          <pre>No valid QR found...</pre>
        </div>
        <div>
          <h3>Manual Entry</h3>
          <Input placeholder='Offer code' onChange={this.manualInput} />
          <Button onClick={this.checkManual}>Check</Button>
        </div>
        <div>
          <QrReader
            ref={this.qr}
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            legacyMode={this.state.legacy}
          />
          <Button onClick={this.openImageDialog}>Submit Image QR</Button>
        </div>
      </Container>
    )
  }

  handleError = () => {
    this.setState({ legacy: true })
  }

  manualInput = e => {
    this.setState({ manual: e.target.value })
  }

  checkManual = e => {
    this.handleScan(this.state.manual)
  }
}

export default PartnerScan
