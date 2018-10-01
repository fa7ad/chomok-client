import { List, Avatar, Button } from 'antd'
import { navigate } from '@reach/router'

class AdminOffersPage extends Component {
  state = {
    offers: [],
    loading: true
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
      .then(r => r.json())
      .then(({ ok, data }) => {
        if (!ok) throw new Error('Something went wrong')
        this.setState({ offers: data, loading: false })
      })
      .catch(e => {
        console.error(e)
        navigate('/login')
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
        avatar={<Avatar src={item.image} />}
        title={item.partner.name}
        description={item.date}
      />
    </List.Item>
  )

  deleteItem = (id, idx) => {
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
