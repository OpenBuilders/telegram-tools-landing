import '@common/styles/index.scss';
import { ThemeContext } from '@context';
import Routes from '@routes';
import { useContext, useEffect } from 'react';

function App() {
  const { darkTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
  }, []);
  return Routes;
}

export default App;
