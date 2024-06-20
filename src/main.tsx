/* eslint-disable import/no-extraneous-dependencies */
// On importe ReactDom qui nous permettra d'injecter notre application dans le DOM
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { Theme } from '@radix-ui/themes';
// On importe notre composant principal
import App from './components/App';
// On importe notre fichier de style global
import './styles/index.scss';
import '@radix-ui/themes/styles.css';

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60000 } }
});

// On injecte notre application dans le DOM
root.render(
  <StrictMode>
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
  </StrictMode>
);
