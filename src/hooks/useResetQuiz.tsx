import { useEffect } from 'react';
import useAppStore from '../stores/appStore';

const useResetQuiz = () => {
  const {
    setCurrentSelectedAnswerIndexList,
    setCurrentProblemIndex,
    setCurrentQuiz,
    setCurrentTime,
  } = useAppStore();

  useEffect(() => {
    setCurrentSelectedAnswerIndexList([]);
    setCurrentProblemIndex(0);
    setCurrentQuiz(null);
    setCurrentTime(0);
  }, [
    setCurrentSelectedAnswerIndexList,
    setCurrentProblemIndex,
    setCurrentQuiz,
    setCurrentTime,
  ]);
};

export default useResetQuiz;
