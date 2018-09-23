import React from 'react'
import { css } from 'react-emotion'
import { GridLoader } from 'react-spinners'

const wrapper = css`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const spinner = css`
  filter: drop-shadow(0 0 5px #fff);
`

export default p => (
  <div className={wrapper}>
    <GridLoader size={50} color='#111' className={spinner} />
  </div>
)
