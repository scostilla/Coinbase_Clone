import './Content.css';
import { useTheme } from '../../contexts/ThemeProvider';

const Content = ({ children }) => {
  const {theme, toggleTheme, themeName } = useTheme();
  return <div className='Content' id={themeName}>{children}</div>;
};

export default Content;
