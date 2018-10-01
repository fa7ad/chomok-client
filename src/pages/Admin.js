import styled from 'react-emotion'
import { navigate } from '@reach/router'
import { Layout, Menu, Icon } from 'antd'

import logoImg from '../img/logo.png'

const Logo = styled('img')`
  height: 60px;
  padding: 10px;
  margin: 0 auto;
  cursor: pointer;
`

const { Header, Content, Footer, Sider } = Layout

class Admin extends PureComponent {
  state = {
    collapsed: false
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  pages = [
    {
      key: 'home',
      name: 'HOME',
      icon: 'home'
    },
    {
      key: 'offers',
      name: 'OFFERS',
      icon: 'bars'
    }
  ]

  contentStyle = {
    padding: 24,
    background: '#fff',
    minHeight: 360,
    margin: '16px 0'
  }

  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          breakpoint='sm'
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}>
          <Logo
            src={logoImg}
            alt='Chomok Logo'
            onClick={this.navigate('/../')}
          />
          <Menu
            theme='dark'
            defaultSelectedKeys={[this.props.page]}
            mode='vertical'
            style={{ textAlign: 'left' }}>
            {this.pages.map(this.mapMenu)}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ color: '#fff', padding: 0, textTransform: 'uppercase' }}>
            {this.props.page}
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={this.contentStyle} default>
              {this.props.render
                ? this.props.render(this.props.page)
                : this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Chomok ©2018 Created by @fa7ad
          </Footer>
        </Layout>
      </Layout>
    )
  }

  navigate = addr => e => {
    navigate(`/admin${addr}`)
  }

  mapMenu = it => (
    <Menu.Item key={it.key} onClick={this.navigate('/' + it.key)}>
      <Icon type={it.icon} />
      <span>{it.name}</span>
    </Menu.Item>
  )

  static propTypes = {
    page: PropTypes.string,
    render: PropTypes.func,
    children: PropTypes.node
  }
}

export default Admin
