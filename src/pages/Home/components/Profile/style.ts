import styled from 'styled-components'

export const ProfileContainer = styled.section`
  margin-top: -5.5rem;
  margin-bottom: 4.5rem;
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
`

export const ProfileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: contain;
    border-radius: 8px;
  }

  & > div {
    flex: 1;
  }

  p {
    display: block;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%; /* 1.6rem */
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.75rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const ProfileFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1.5rem;

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
