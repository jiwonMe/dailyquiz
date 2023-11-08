import { useEffect, useState } from 'react';
import QuizStartPage from './QuizStartPage';
import QuizContentPage from './QuizContentPage';
import { Problem } from '../types/Problem';
import QuizResultPage from './QuizResultPage';
import dummyData from '../types/dummyData';
import { useParams } from 'react-router-dom';

const QuizPage = () => {
  const { quizId } = useParams();

  const [problemNumber, setProblemNumber] = useState(-1); // -1: before start, 0 ~ 4: problem number, 5: result

  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {});

  useEffect(() => {
    setProblems(
      dummyData.quizzes.find((quiz) => quiz.id === Number(quizId))!.problems
    );
  }, []);

  if (problemNumber === -1) {
    return (
      <QuizStartPage
        quiz={dummyData.quizzes.find((quiz) => quiz.id === Number(quizId))!}
        onClickStartButton={() => {
          setProblemNumber(0);
        }}
      />
    );
  } else if (problemNumber === problems.length) {
    return (
      <QuizResultPage
        quiz={dummyData.quizzes.find((quiz) => quiz.id === Number(quizId))!}
      />
    );
  } else {
    return (
      <QuizContentPage
        problems={problems}
        problemNumber={problemNumber}
        setProblemNumber={setProblemNumber}
      />
    );
  }
};

export default QuizPage;
