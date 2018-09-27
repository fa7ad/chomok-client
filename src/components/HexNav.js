import styled, { css } from 'react-emotion'
import { Link } from '@reach/router'

const Container = styled('div')`
  display: grid;
  justify-content: center;
  grid-auto-rows: 48px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px;
  padding-bottom: 24px;
  margin: 0 auto;
  width: 100%;
  max-width: ${p => p.size};
`

const Item = styled(Link)`
  background-color: #111;
  width: calc(100% - 48px);
  z-index: 1;
  margin: 0 24px;
  height: 48px;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 200ms ease;
  text-transform: uppercase;
  font-weight: 400;
  font-family: Montserrat, sans-serif;
  filter: drop-shadow(0 0 1px #333333);
  visibility: ${p => (!p.children || p.no ? 'hidden' : 'visible')};

  &:hover {
    z-index: 2;
    &::before,
    &::after {
      z-index: -1;
    }
  }

  &,
  &:hover,
  &:link,
  &:active,
  &:focus {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    transform: scale3D(1.05, 1.05, 1.05);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 34px;
    height: 34px;
    background-color: #111;
    transform: rotate(45deg);
    z-index: -1;
  }

  &::before {
    left: -17px;
  }

  &::after {
    right: -17px;
  }

  &:nth-child(odd) {
    left: 12px;
  }

  &:nth-child(even) {
    top: 26px;
    left: -12px;
  }
`

const hidden = css`
  visibility: hidden;
`

export { Container as NavContainer, Item as NavItem, hidden }

export default { Container, Item, hidden }
