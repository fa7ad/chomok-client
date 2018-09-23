import styled from 'react-emotion'
import { Link } from '@reach/router'

const Container = styled('div')`
  padding-bottom: 20px;
  border: 1px solid #000;
  justify-content: center;
  display: grid;
  grid-auto-rows: 36px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px;
  width: ${p => p.width};
  margin: 0 auto;
`

const Item = styled(Link)`
  background-color: #333;
  width: calc(100% - 36px);
  margin: 0 18px;
  height: 36px;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 250ms ease;
  z-index: 1;
  filter: drop-shadow(0 0 2px rgb(130, 130, 130));

  &,
  &:before,
  &:after {
    &:hover {
      z-index: 2;
    }
  }

  &:hover {
    transform: scale(1.1);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #333;
    transform: rotate(45deg);
    z-index: -1;
  }

  &::before {
    left: -13px;
  }

  &::after {
    right: -13px;
  }

  &:nth-child(odd) {
    left: 9px;
  }

  &:nth-child(even) {
    bottom: -20px;
    left: -9px;
  }
`

export { Container as NavContainer, Item as NavItem }

export default { Container, Item }
