import { useEffect } from 'react';
import useAppStore from '../stores/appStore';
import { getQuiz } from '../api/getQuiz';

const useQuizzes = () => {
  const { quizList, setQuizList } = useAppStore();

  useEffect(() => {
    if (quizList.length === 0) {
      (async () => {
        const quizzes = await Promise.all([1, 2, 3, 4, 5].map(() => getQuiz()));
        setQuizList(quizzes);
      })();
    }
  }, [quizList.length, setQuizList]);

  return quizList;
};

export default useQuizzes;
