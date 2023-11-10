import { useEffect } from 'react';
import useAppStore from '../stores/appStore';

const useQuizResult = () => {
  const {
    currentQuiz,
    setCurrentQuiz,
    currentSelectedAnswerIndexList,
    currentTime,
  } = useAppStore();

  useEffect(() => {
    if (!currentQuiz) return;

    let correctCount = 0;
    currentQuiz.problems.forEach((problem, index) => {
      if (problem.answer === currentSelectedAnswerIndexList[index]) {
        correctCount++;
      }
    });

    const score = Math.floor(
      (correctCount / currentQuiz.problems.length) * 100
    );

    setCurrentQuiz({
      ...currentQuiz,
      solvedHistory: [
        ...currentQuiz.solvedHistory,
        {
          userId: 1, // Assuming '1' is the current user's ID
          score,
          correctCount,
          timeSpent: currentTime,
          solvedAt: new Date(),
          solvedAnswers: currentSelectedAnswerIndexList,
        },
      ],
    });
  }, []);

  return currentQuiz;
};

export default useQuizResult;
