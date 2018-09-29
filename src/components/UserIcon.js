import styled from 'react-emotion'

export default styled('img')`
  width: 40px;
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
  z-index: 2;

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  border-radius: 50%;

  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.02);
  }
`
