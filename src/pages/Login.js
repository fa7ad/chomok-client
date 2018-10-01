import { Icon, Input, Button } from 'antd'

import styled from 'react-emotion'

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Box = styled('div')`
  background-color: rgba(55, 55, 55, 0.85);
  box-shadow: 0 0 5px rgba(55, 55, 55, 0.85);
  border-radius: 5px;
  padding: 20px;
  width: 50%;
  max-width: 480px;
  min-height: 240px;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

class Login extends Component {
  state = {
    userName: ''
  }
  render () {
    return (
      <Wrapper style={this.props.style}>
        <Box>
          <strong>Please log in</strong>
          <Input
            placeholder='Enter your username'
            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
            value={this.state.userName}
            onChange={this.onChange('userName')}
          />
          <Input
            placeholder='Enter your password'
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            value={this.state.password}
            onChange={this.onChange('password')}
            type='password'
          />
          <Button type='primary'>
            <Icon type='lock' />
          </Button>
        </Box>
      </Wrapper>
    )
  }

  onChange = name => e => {
    this.setState({ [name]: e.currentTarget.value })
  }

  static propTypes = {
    style: PropTypes.object
  }
}

export default Login
