import { useEffect, useState } from 'react';
import QuizStartPage from './QuizStartPage';
import QuizContentPage from './QuizContentPage';
import QuizResultPage from './QuizResultPage';
import { useParams } from 'react-router-dom';
import useAppStore from '../stores/appStore';

const QuizPage = () => {
  const { quizId } = useParams();

  const { quizList, currentQuiz, setCurrentQuiz } = useAppStore();

  const [problemIndex, setProblemIndex] = useState(-1);

  // if currentQuiz is not set, set currentQuiz
  useEffect(() => {
    if (currentQuiz === null) {
      setCurrentQuiz(quizList.find((quiz) => quiz.id === quizId)!);
    }
  });

  if (currentQuiz === null) {
    return <div>Loading...</div>;
  } else if (problemIndex === -1) {
    return (
      <QuizStartPage
        quiz={currentQuiz}
        onClickStartButton={() => {
          setProblemIndex(0);
        }}
      />
    );
  } else if (problemIndex === currentQuiz.problems.length) {
    return <QuizResultPage />;
  } else {
    return (
      <QuizContentPage
        problems={currentQuiz.problems}
        problemIndex={problemIndex}
        setProblemIndex={setProblemIndex}
      />
    );
  }
};

export default QuizPage;
