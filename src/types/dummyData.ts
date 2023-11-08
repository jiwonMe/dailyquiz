import { Quiz } from './Quiz';
import { User } from './User';
// 퀴즈 예시 데이터
const quizzes: Quiz[] = [
  {
    id: 1,
    title: 'TEAM BABY',
    description: '검정치마 TEAM BABY 수록곡의 가사를 맞춰보세요',
    problems: [
      {
        id: 1,
        statement: '좋은 술과 저급한 웃음',
        choices: [
          '꺼진 불속 조용한 관음',
          '눈부신 햇살과 푸른 하늘',
          '밝은 달빛과 빛나는 별',
          '어두운 밤하늘과 푸르른 너',
        ],
        answer: 0,
      },
      {
        id: 2,
        statement: '내 사랑은',
        choices: [
          '세상에서 최고야',
          '얼어붙지 않을거야',
          '자로 잰 듯이 반듯해',
          '한 번도 틀리지 않아',
        ],
        answer: 2,
      },
      {
        id: 3,
        statement: '변하지 않는 건 다이아몬드하고',
        choices: [
          '내 사랑',
          '널 사랑하는 나',
          '시간 속의 추억',
          '이 세상의 법칙',
        ],
        answer: 1,
      },
      {
        id: 4,
        statement: '이젠 한시 오분 멈춰있는',
        choices: [
          '네가 없는 날은 어떻게든',
          '투명해진 날 누가 볼 수 있을까',
          '흘러가기만 기다려',
          '시계처럼 너 하나만 봐',
        ],
        answer: 3,
      },
      {
        id: 5,
        statement: '너무 걱정하지마 (뒤에 오지 않는 가사는?)',
        choices: [
          '애써 몸이 나빠질 때에도',
          '내가 정이 별로 없을때도',
          '나를 혼자 남겨 둘 때에도',
          '나를 떠나가 버릴 때에도',
        ],
        answer: 3,
      },
    ],
    createdAt: new Date('2023-05-01T00:00:00Z'),
    updatedAt: new Date('2023-05-01T12:00:00Z'),
    author: '역사 마니아',
    solvedHistory: [
      {
        userId: 1,
        solvedAt: new Date('2023-05-01T12:00:00Z'),
        solvedAnswers: [1, 2, 1, 3, 2],
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
