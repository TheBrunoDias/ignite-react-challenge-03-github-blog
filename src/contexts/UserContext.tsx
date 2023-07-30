import { ReactNode } from 'react'
import { useQuery } from 'react-query'
import { createContext } from 'use-context-selector'
import { GitHubUserProps, fetchGitHubUser } from '../services/githubUserService'

interface GitHubUserContextProps {
  user?: GitHubUserProps
}

interface GitHubUserProviderProps {
  children: ReactNode
}

export const GitHubUserContext = createContext({} as GitHubUserContextProps)

export function GitHubUserProvider({ children }: GitHubUserProviderProps) {
  const { data: user } = useQuery({
    queryKey: ['github-user'],
    queryFn: () => fetchGitHubUser('facebook'),
  })

  return (
    <GitHubUserContext.Provider value={{ user }}>
      {children}
    </GitHubUserContext.Provider>
  )
}
