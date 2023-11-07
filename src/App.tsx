import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import QuizStartPage from './pages/QuizStartPage';
import MainPage from './pages/MainPage';
import MobileView from './components/MobileView';

const App = () => {
  return (
    <MobileView>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<QuizStartPage />} />
        </Routes>
      </BrowserRouter>
    </MobileView>
  );
};

export default App;
