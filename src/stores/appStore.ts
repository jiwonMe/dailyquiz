import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Quiz } from '../types/Quiz';

interface AppStore {
  currentQuiz: Quiz | null;
  setCurrentQuiz: (quiz: Quiz) => void;

  currentProblemIndex: number;
  setCurrentProblemIndex: (index: number) => void;
}

const useAppStore = create<AppStore>()(
  immer(
    devtools((set) => ({
      currentQuiz: null,
      setCurrentQuiz: (quiz) =>
        set((state) => {
          state.currentQuiz = quiz;
        }),

      currentProblemIndex: 0,
      setCurrentProblemIndex: (index) =>
        set((state) => {
          state.currentProblemIndex = index;
        }),
    }))
  )
);

export default useAppStore;
