/* eslint-disable import/no-extraneous-dependencies */
// On importe ReactDom qui nous permettra d'injecter notre application dans le DOM
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// On importe notre composant principal
import App from './components/App';
// On importe notre fichier de style global
import './styles/index.scss';

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60000 } },
});

// On injecte notre application dans le DOM
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
