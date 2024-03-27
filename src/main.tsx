import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <App />
  </Provider>
  </QueryClientProvider>
)
