// vitest test
import { describe, it, expect } from 'vitest';

import fetch from 'node-fetch';
global.fetch = fetch as unknown as typeof window.fetch;

import { getQuiz } from '../api/getQuiz';

describe('getQuiz', () => {
  it('should return quiz', async () => {
    const quiz = await getQuiz();

    // quiz length should be 10
    expect(quiz.problems.length).toBe(10);

    expect(quiz).toHaveProperty('id');
    expect(quiz).toHaveProperty('title');
    expect(quiz).toHaveProperty('description');
    expect(quiz).toHaveProperty('problems');
    expect(quiz).toHaveProperty('image');
    expect(quiz).toHaveProperty('createdAt');
    expect(quiz).toHaveProperty('updatedAt');
    expect(quiz).toHaveProperty('author');
    expect(quiz).toHaveProperty('solvedHistory');
  });
});
