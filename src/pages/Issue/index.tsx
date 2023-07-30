import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useRef } from 'react'
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import { fetchIssue } from '../../services/issuesService'
import { IssueContainer, IssueContent, IssueInformation } from './style'

export function IssuePage() {
  const navigate = useNavigate()
  const { number } = useParams()
  const ref = useRef<HTMLDivElement | null>(null)

  const { data: issue, isLoading } = useQuery({
    queryKey: ['issue', number],
    queryFn: ({ queryKey }) => {
      if (queryKey[1]) {
        return fetchIssue({
          issueNumber: +queryKey[1],
          repo: 'react',
          user: 'facebook',
        })
      }
    },
  })

  useEffect(() => {
    if (ref.current) {
      const anchors = ref.current?.querySelectorAll('a')

      anchors?.forEach((anchor) => {
        anchor.setAttribute('target', '_blank')
        anchor.setAttribute('rel', 'noopener noreferrer')
      })
    }
  }, [issue])

  if (!issue && !isLoading) {
    navigate('/')
    return null
  }

  return issue ? (
    <IssueContainer>
      <IssueInformation>
        <header>
          <button onClick={() => navigate(-1)}>
            <FaChevronLeft />
            <span>Voltar</span>
          </button>

          <a href={issue?.html_url} target="_blank" rel="noopener noreferrer">
            <span>Ver no github</span>
            <FaArrowUpRightFromSquare />
          </a>
        </header>
        <strong>{issue?.title}</strong>
        <footer>
          <div>
            <FaGithub />
            <span>{issue?.user.login}</span>
          </div>

          <div>
            <FaCalendarDay />
            <span>
              {formatDistanceToNow(new Date(issue?.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>

          <div>
            <FaComment />
            <span>{issue.comments}</span>
          </div>
        </footer>
      </IssueInformation>

      <IssueContent ref={ref}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            },
          }}
        >
          {issue.body}
        </ReactMarkdown>
      </IssueContent>
    </IssueContainer>
  ) : (
    <></>
  )
}
