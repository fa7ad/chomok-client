import styled from 'react-emotion'

export default styled('img')`
  width: 70px;
  position: absolute;
  cursor: pointer;
  top: 10px;
  left: calc(50% - 35px);

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  border-radius: 50%;

  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.05);
  }
`
