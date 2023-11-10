export type Quiz = {
  id: string;
  title: string;
  description: string;
  problems: Problem[];

  createdAt: Date;
  updatedAt: Date;

  author: string;

  image: string;

  solvedHistory: {
    userId: number;
    solvedAt: Date;
    solvedAnswers: number[];
    score: number;
    correctCount: number;
    timeSpent: number; // seconds
  }[];
};
