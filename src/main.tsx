import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import App from './components/App/App';
import './styles/index.scss';
import '@radix-ui/themes/styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
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
);
