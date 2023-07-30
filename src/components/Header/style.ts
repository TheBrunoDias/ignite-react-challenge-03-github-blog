import styled from 'styled-components'
import bg from '../../assets/header-bg.png'

export const HeaderContainer = styled.header`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme['base-profile']};
  background-size: 100% 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 8.38rem;
`
