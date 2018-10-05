import React from 'react'
import { List, Avatar, Button, Tag } from 'antd'
import { navigate } from '@reach/router'

class AdminOffersPage extends React.PureComponent {
  state = {
    offers: [],
    loading: true
  }

  listStyle = {
    textAlign: 'left'
  }

  render () {
    return (
      <List
        loading={this.state.loading}
        itemLayout='horizontal'
        dataSource={this.state.offers}
        renderItem={this.listMapper}
      />
    )
  }

  componentDidMount () {
    fetch('/api/offers', { credentials: 'include' })
      .then(r => {
        if (r.status === 401) navigate('/login')
        return r.json()
      })
      .then(({ ok, data }) => {
        if (!ok) throw new Error('Something went wrong')
        this.setState({ offers: data, loading: false })
      })
      .catch(e => {
        console.error(e)
      })
  }

  listMapper = (item, idx) => (
    <List.Item
      actions={[
        <Button onClick={this.deleteItem(item._id, idx)} type='danger'>
          DELETE!
        </Button>
      ]}>
      <List.Item.Meta
        avatar={<Avatar src={item.image} size='large' shape='square' />}
        title={this.getItemTitle(item)}
        description={this.getItemDesc(item)}
        style={this.listStyle}
      />
    </List.Item>
  )

  getItemTitle = item => (
    <>
      <Tag color='red'>
        <b>Name:</b> {item.partner.name}
      </Tag>
      <Tag color='orange'>
        <b>Zone:</b> {item.zone.division + '/' + item.zone.name}
      </Tag>
    </>
  )

  getItemDesc = item => (
    <>
      <Tag color='magenta'>
        <b>Date: </b> {item.date}
      </Tag>
      <Tag color='blue'>
        <b>Request:</b> {item.reqBy.length}
      </Tag>
      <Tag color='green'>
        <b>Used:</b> {item.useBy.length}
      </Tag>
    </>
  )

  deleteItem = (id, idx) => e => {
    fetch('/api/offers/' + id, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(({ ok }) => {
        if (ok) {
          this.setState(p => {
            const copy = { ...this.state }
            copy.offers.splice(idx, 1)
            return copy
          })
        } else {
          throw new Error('Something went wrong')
        }
      })
      .catch(e => {
        console.error(e)
      })
  }
}

export default AdminOffersPage