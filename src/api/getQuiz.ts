// get quiz from opentdb (https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple) use axios

import type { TDBApiResponse } from '../types/opentdb';
import type { Problem } from '../types/Problem';

import { v4 as uuidv4 } from 'uuid';
import { Quiz } from '../types/Quiz';

export const getQuiz = async (): Promise<Quiz> => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${Math.floor(
      Math.random() * 33
    )}&difficulty=medium&type=multiple`
  );
  const data = (await response.json()) as TDBApiResponse;
  const title = data.results[0].category;
  const description = data.results[0].question;

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

    image: `https://picsum.photos/seed/${uuidv4()}/256`,

    createdAt: new Date(),
    updatedAt: new Date(),

    author: 'opentdb',

    solvedHistory: [],
  };
};
