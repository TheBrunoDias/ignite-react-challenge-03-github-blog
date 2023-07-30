import styled from 'styled-components'

export const IssueContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 880px;
  width: 100%;
  margin: 0 auto 15rem auto;
`

export const IssueInformation = styled.div`
  margin-top: -5.5rem;
  width: 100%;
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button,
    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      border: 0;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      gap: 0.5rem;
      cursor: pointer;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  strong {
    display: block;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const IssueContent = styled.div`
  width: 100%;
  color: ${(props) => props.theme['base-text']};
  padding: 2.5rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme['base-title']};
    margin: 1rem 0;
  }

  ul,
  ol {
    list-style-position: inside;

    li {
      margin: 0.5rem 0;
    }
  }

  img {
    width: 100%;
    margin: 0.5 0;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    border: 0;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    background: none;
    gap: 0.5rem;
    cursor: pointer;
    font-weight: 700;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  p {
    margin: 1rem 0;
  }
`
