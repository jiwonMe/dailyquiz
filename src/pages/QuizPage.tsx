import { useState } from 'react';
import QuizStartPage from './QuizStartPage';
import QuizContentPage from './QuizContentPage';
import { Problem } from '../types/Problem';
import QuizResultPage from './QuizResultPage';
// import QuizContentPage from './QuizContentPage';

const QuizPage = () => {
  const [problemNumber, setProblemNumber] = useState(5);

  const [problems] = useState<Problem[]>([
    {
      id: 0,
      statement: '오늘은 대망의 티케팅 날, 내가 선택한 티케팅 방법은?',
      choices: ['온라인', '오프라인'],
      answer: 0,
    },
    {
      id: 1,
      statement: '티케팅을 마치고 나니, 내가 선택한 공연은?',
      choices: ['뮤지컬', '연극', '콘서트'],
      answer: 1,
    },
    {
      id: 2,
      statement: '공연장에 도착했어, 내가 선택한 좌석은?',
      choices: ['앞쪽', '뒷쪽'],
      answer: 1,
    },
    {
      id: 3,
      statement:
        '공연이 끝났어, 이제 집에 갈 시간이야. 내가 선택한 교통수단은?',
      choices: ['지하철', '버스', '택시'],
      answer: 0,
    },
    {
      id: 4,
      statement:
        '집에 도착했어, 이제 내가 선택한 방법으로 하루를 마무리 할 시간이야.',
      choices: ['씻고 잠자기', '바로 잠자기'],
      answer: 1,
    },
  ]);

  if (problemNumber === -1) {
    return (
      <QuizStartPage
        onClickStartButton={() => {
          setProblemNumber(0);
        }}
      />
    );
  } else if (problemNumber === problems.length) {
    return <QuizResultPage />;
  } else {
    return (
      <QuizContentPage
        problems={problems}
        problemNumber={problemNumber}
        setProblemNumber={setProblemNumber}
      />
    );
  }
};

export default QuizPage;
