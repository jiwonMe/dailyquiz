import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Quiz } from '../types/Quiz';

interface AppStore {
  quizList: Quiz[];
  setQuizList: (quizList: Quiz[]) => void;

  currentQuiz: Quiz | null;
  setCurrentQuiz: (quiz: Quiz | null) => void;

  currentProblemIndex: number;
  setCurrentProblemIndex: (index: number) => void;

  currentSelectedAnswerIndexList: number[];
  setCurrentSelectedAnswerIndexList: (answers: number[]) => void;

  currentTime: number; // seconds
  setCurrentTime: (time: number) => void;
}

const useAppStore = create<AppStore>()(
  persist(
    immer(
      devtools((set) => ({
        quizList: [],
        setQuizList: (quizList) =>
          set((state) => {
            state.quizList = quizList;
          }),

        currentQuiz: null,
        setCurrentQuiz: (quiz) =>
          set((state) => {
            state.currentQuiz = quiz;
          }),

        currentProblemIndex: -1,
        setCurrentProblemIndex: (index) =>
          set((state) => {
            state.currentProblemIndex = index;
          }),

        currentSelectedAnswerIndexList: [],
        setCurrentSelectedAnswerIndexList: (answers) =>
          set((state) => {
            state.currentSelectedAnswerIndexList = answers;
          }),

        currentTime: 0,
        setCurrentTime: (time) =>
          set((state) => {
            state.currentTime = time;
          }),
      }))
    ),
    {
      name: 'app-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAppStore;
