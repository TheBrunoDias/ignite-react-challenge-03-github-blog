import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { GitHubUserProvider } from './contexts/UserContext'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './lib/reactQuery'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <GitHubUserProvider>
          <Router />
        </GitHubUserProvider>
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
