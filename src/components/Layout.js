import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'

export const cdark = css`
  background: rgba(0, 0, 0, 0.45);

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`

export const cnophone = css`
  @media (max-width: 640px) {
    flex-basis: 100%;
    display: none;
  }
`

const Sec = ({ dark, nophone, className, ...p }) => (
  <section
    className={cx(className, { [cdark]: dark }, { [cnophone]: nophone })}
    {...p}
  />
)

Sec.propTypes = {
  dark: PropTypes.bool,
  nophone: PropTypes.bool,
  className: PropTypes.string
}

export const Section = styled(Sec)`
  flex-basis: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;
`
