export type Quiz = {
  id: number;
  title: string;
  description: string;
  problems: Problem[];

  createdAt: Date;
  updatedAt: Date;

  author: string;

  solvedHistory: {
    userId: number;
    solvedAt: Date;
    solvedAnswers: number[];
    score: number;
    correctCount: number;
    timeSpent: number; // seconds
  }[];
};
