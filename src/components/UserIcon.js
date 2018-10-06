import styled from 'react-emotion'
import { Icon } from 'antd'

export default styled(Icon)`
  font-size: 24px;
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
  z-index: 2;
  display: block;

  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.25));
  transition: all 250ms ease;

  &:hover {
    color: #111;
    filter: drop-shadow(0 0 1px #fff);

  }
`
