import { useForm } from 'react-hook-form'
import { Profile } from './components/Profile'
import {
  HomeContainer,
  IssueCard,
  IssuesCardContainer,
  PublicationsContainer,
  SearchFormContainer,
} from './components/style'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDebounce } from '../../hooks/useDebounce'
import { useQuery } from 'react-query'
import { fetchRepositoryIssues } from '../../services/issuesService'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Link } from 'react-router-dom'

const searchIssuesFormSchema = z.object({
  query: z.string(),
})

type SearchIssuesFormProps = z.infer<typeof searchIssuesFormSchema>

export function Home() {
  const { register, watch } = useForm<SearchIssuesFormProps>({
    resolver: zodResolver(searchIssuesFormSchema),
    defaultValues: {
      query: '',
    },
  })

  const inputValue = useDebounce(watch('query'))

  const { data: issues } = useQuery({
    queryKey: ['issues', inputValue],
    queryFn: ({ queryKey }) =>
      fetchRepositoryIssues('facebook/react', queryKey[1]),
  })

  return (
    <HomeContainer>
      <Profile />

      <PublicationsContainer>
        <strong>Publicações</strong>
        <span> {issues?.length} publicações</span>
      </PublicationsContainer>

      <SearchFormContainer>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchFormContainer>

      <IssuesCardContainer>
        {issues?.map((issue) => (
          <IssueCard key={issue.number}>
            <header>
              <strong>{issue.title}</strong>

              <span>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </header>
            <div>
              <ReactMarkdown>{issue.body}</ReactMarkdown>
            </div>

            <footer>
              <Link to={`/issue/${issue.number}`}>Saiba Mais</Link>
            </footer>
          </IssueCard>
        ))}
      </IssuesCardContainer>
    </HomeContainer>
  )
}
