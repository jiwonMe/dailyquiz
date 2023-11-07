import { useState } from 'react';
import QuizStartPage from './QuizStartPage';
import QuizContentPage from './QuizContentPage';
// import QuizContentPage from './QuizContentPage';

const QuizPage = () => {
  const [problemNumber, setProblemNumber] = useState(0);

  if (problemNumber === 0) {
    return (
      <QuizStartPage
        onClickStartButton={() => {
          setProblemNumber(1);
        }}
      />
    );
  } else {
    return <QuizContentPage />;
  }
};

export default QuizPage;
