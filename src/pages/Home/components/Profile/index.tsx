import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaGithub,
  FaUserGroup,
} from 'react-icons/fa6'

import { useContextSelector } from 'use-context-selector'
import { GitHubUserContext } from '../../../../contexts/UserContext'
import {
  ProfileContainer,
  ProfileContent,
  ProfileFooter,
  ProfileHeader,
} from './style'

export function Profile() {
  const user = useContextSelector(GitHubUserContext, (ctx) => {
    return ctx.user
  })

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={user?.avatar_url} alt="" />

        <div>
          <ProfileHeader>
            <h1>{user?.name}</h1>

            <a href={user?.html_url} target="_blank" rel="noopener noreferrer">
              GITHUB
              <FaArrowUpRightFromSquare size={12} />
            </a>
          </ProfileHeader>

          <p>{user?.bio}</p>

          <ProfileFooter>
            <div>
              <FaGithub size={18} />
              <span>{user?.login}</span>
            </div>

            <div>
              <FaBuilding size={18} />
              <span>{user?.location}</span>
            </div>

            <div>
              <FaUserGroup size={18} />
              <span>{user?.followers} seguidores</span>
            </div>
          </ProfileFooter>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
