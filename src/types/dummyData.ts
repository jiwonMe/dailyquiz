import { Quiz } from './Quiz';
import { User } from './User';
// 퀴즈 예시 데이터
const quizzes: Quiz[] = [
  {
    id: 1,
    title: '한국 역사 퀴즈',
    description: '한국의 역사에 대해 얼마나 알고 있는지 테스트하세요.',
    problems: [
      {
        id: 1,
        statement: '한국의 수도는 어디입니까?',
        choices: ['서울', '부산', '인천', '대구'],
        answer: 0,
      },
      {
        id: 2,
        statement: '한국에서 가장 높은 산은 어디입니까?',
        choices: ['한라산', '지리산', '설악산', '덕유산'],
        answer: 0,
      },
      {
        id: 3,
        statement: '한글을 창제한 왕은 누구입니까?',
        choices: ['태조', '세종대왕', '광해군', '영조'],
        answer: 1,
      },
      {
        id: 4,
        statement: '한국의 전통 명절이 아닌 것은?',
        choices: ['추석', '설날', '한식', '할로윈'],
        answer: 3,
      },
      {
        id: 5,
        statement: '다음 중 한국의 국립공원이 아닌 곳은 어디입니까?',
        choices: [
          '지리산 국립공원',
          '세계산 국립공원',
          '북한산 국립공원',
          '덕유산 국립공원',
        ],
        answer: 1,
      },
    ],
    createdAt: new Date('2023-05-01T00:00:00Z'),
    updatedAt: new Date('2023-05-01T12:00:00Z'),
    author: '역사 마니아',
    solvedHistory: [
      {
        userId: 1,
        solvedAt: new Date('2023-05-01T12:00:00Z'),
        solvedAnswers: [0, 0, 1, 1, 0],
        score: 60,
        correctCount: 3,
        timeSpent: 152, // seconds
      },
    ],
  },
  // 추가 퀴즈 데이터...
];

// 사용자 예시 데이터
const users: User[] = [
  {
    id: 1,
    email: 'honggildong@example.com',
    createdAt: new Date('2023-04-20T00:00:00Z'),
    solvedQuizzes: [1],
  },
  // 추가 사용자 데이터...
];

// 여기서 추가적인 예시 데이터를 더 구성하십시오...
// 예를 들어, 더 많은 Problem, Quiz, User 엔트리를 만들어 낼 수 있습니다.
// 이 코드는 실제 사용 예시가 아니며 데이터 구조와 타입을 설명하기 위한 것임을 명심하십시오.

export default { quizzes, users };
