import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import QuizPage from './pages/QuizPage';
import MainPage from './pages/MainPage';
import MobileView from './components/MobileView';
import { ThemeProvider } from 'styled-components';
import theme from './designs/theme';

const App = () => {
  return (
    <MobileView>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/quiz/:quizId" element={<QuizPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MobileView>
  );
};

export default App;
