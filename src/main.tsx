import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme } from '@radix-ui/themes';
import App from './components/App';
import './styles/index.scss';
import '@radix-ui/themes/styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60000 } },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Theme
        accentColor="gray"
        grayColor="gray"
        panelBackground="solid"
        scaling="100%"
        radius="none"
      >
        <App />
      </Theme>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
