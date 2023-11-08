export type User = {
  id: number;
  email: string;

  createdAt: Date;

  solvedQuizzes: number[];
};
