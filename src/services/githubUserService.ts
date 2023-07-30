import { api } from '../lib/axios'

export interface GitHubUserProps {
  id: number
  login: string
  name: string
  avatar_url: string
  location: string
  html_url: string
  followers: number
  bio: string
}

export async function fetchGitHubUser(user: string) {
  const { data } = await api.get(`/users/${user}`)
  return data as GitHubUserProps
}
