export type TDBApiResponse = {
  response_code: number;
  results: TDBProblem[];
};

export type TDBProblem = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
