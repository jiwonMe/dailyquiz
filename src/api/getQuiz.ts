// get quiz from opentdb (https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple) use axios

import type { TDBApiResponse } from '../types/opentdb';
import type { Problem } from '../types/Problem';

import { v4 as uuidv4 } from 'uuid';
import { Quiz } from '../types/Quiz';

export const getQuiz = async (): Promise<Quiz> => {
  const response = await fetch(
    'https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple'
  );
  const data = (await response.json()) as TDBApiResponse;
  const title = 'Quiz from opentdb';
  const description = 'Quiz from opentdb';

  const problems = data.results.map((problem, index) => {
    const choices = problem.incorrect_answers.concat(problem.correct_answer);
    const answer = choices.indexOf(problem.correct_answer);

    return {
      id: index,
      statement: problem.question,
      choices,
      answer,
    };
  }) as Problem[];

  return {
    id: uuidv4(),

    title,
    description,
    problems,

    createdAt: new Date(),
    updatedAt: new Date(),

    author: 'opentdb',

    solvedHistory: [],
  };
};
