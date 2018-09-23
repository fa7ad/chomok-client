import React from 'react'

import { css, cx } from 'react-emotion'

const full = css`
  flex-basis: 100%;

  display: flex;
  flex-direction: row;
  align-items: stretch;
`

const half = css`
  flex-basis: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const dark = css`
  background: rgba(0, 0, 0, 0.45);
`

export default p => (
  <div className={full}>
    <div className={cx(half)}>This will have nav</div>
    <div className={cx(half, dark)}>About section</div>
  </div>
)
