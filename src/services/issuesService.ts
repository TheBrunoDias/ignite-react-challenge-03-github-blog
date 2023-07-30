import { api } from '../lib/axios'
import { GitHubUserProps } from './githubUserService'

export interface IssueProps {
  url: string
  repository_url: string
  html_url: string
  id: number
  title: string
  number: number
  user: GitHubUserProps
  comments: number
  created_at: Date
  updated_at: Date
  body: string
}

interface GetIssueProps {
  user: string
  repo: string
  issueNumber: number
}

export async function fetchRepositoryIssues(repo: string, query?: string) {
  const queryString =
    'q=' +
    encodeURIComponent(`${query ? `${query} ` : ''}repo:${repo} type:issue`)
  const { data } = await api.get(
    `/search/issues?${queryString}&per_page=6&order=desc`,
  )

  return data.items as IssueProps[]
}

export async function fetchIssue({ issueNumber, repo, user }: GetIssueProps) {
  const { data } = await api.get(`/repos/${user}/${repo}/issues/${issueNumber}`)

  return data as IssueProps
}
