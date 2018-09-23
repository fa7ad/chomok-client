import styled from 'react-emotion'

export default styled('div')`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;

  [role=group] {
    flex-basis: 100%;

    display: flex;
    align-items: stretch;
  }
`
