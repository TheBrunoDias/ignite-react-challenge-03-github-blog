import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 880px;
  width: 100%;
  margin: 0 auto 15rem auto;
`

export const PublicationsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const SearchFormContainer = styled.div`
  max-width: 880px;
  margin-top: 0.75rem;
  margin-bottom: 3rem;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const IssuesCardContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(auto, 416px));
  justify-content: space-between;
  gap: 2rem;
`

export const IssueCard = styled.div`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.theme['base-text']};
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};
  transition: border 0.2s;
  border: 2px solid transparent;
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    strong {
      font-size: 1.25rem;
      flex: 1;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  & > div {
    margin-top: 1.25rem;
    max-width: max-content;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  footer {
    flex: 1;
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      gap: 0.5rem;

      font-size: 0.75rem;
      font-weight: 700;
      line-height: 160%;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }
`
