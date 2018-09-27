import styled from 'react-emotion'

export const Row = styled('div')`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;

  [role='group'] {
    flex-basis: 100%;

    display: flex;
    align-items: stretch;
  }
`

export const Page = styled('div')`
  flex-basis: 100%;

  display: flex;
  flex-direction: row;
  align-items: stretch;

  @media screen and (max-width: 480px) {
    .hide-phone {
      display: none;
    }
  }
`

export const Section = styled('section')`
  flex-basis: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;

  @media (max-width: 480px) {
    flex-basis: 100%;
  }

  background: ${p => (p.dark ? 'rgba(0, 0, 0, 0.45)' : 'transparent')};

  &:hover {
    background: ${p => (p.dark ? 'rgba(0, 0, 0, 0.6)' : 'transparent')};
  }
`
