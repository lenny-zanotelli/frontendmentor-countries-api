import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import ThemeProvider from '../../contexts/ThemeProvider';
import Detail from '../../pages/Details';
import Header from '../Layout/Header/Header';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:cca3" element={<Detail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
