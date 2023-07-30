import { HeaderContainer } from './style'
import logo from '../../assets/github-blog-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}
