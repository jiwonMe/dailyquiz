import styled from 'styled-components';
import { Heading2, Heading3 } from '../designs/typographys';

import ChoiceContainer from '../components/ChoiceContainer';
import Button from '../components/Button';
import { useState } from 'react';
import { Problem } from '../types/Problem';
import Toast from '../components/Toast';

import { FiSmile, FiFrown } from 'react-icons/fi';
import theme from '../designs/theme';

const QuizContentPage = () => {
  const [problems] = useState<Problem[]>([
    {
      id: 1,
      statement: '오늘은 대망의 티케팅 날, 내가 선택한 티케팅 방법은?',
      choices: ['온라인', '오프라인'],
      answer: 0,
    },
    {
      id: 2,
      statement: '티케팅을 마치고 나니, 내가 선택한 공연은?',
      choices: ['뮤지컬', '연극', '콘서트'],
      answer: 1,
    },
    {
      id: 3,
      statement: '공연장에 도착했어, 내가 선택한 좌석은?',
      choices: ['앞쪽', '뒷쪽'],
      answer: 1,
    },
    {
      id: 4,
      statement:
        '공연이 끝났어, 이제 집에 갈 시간이야. 내가 선택한 교통수단은?',
      choices: ['지하철', '버스', '택시'],
      answer: 0,
    },
    {
      id: 5,
      statement:
        '집에 도착했어, 이제 내가 선택한 방법으로 하루를 마무리 할 시간이야.',
      choices: ['씻고 잠자기', '바로 잠자기'],
      answer: 1,
    },
  ]);

  const [problemNumber, setProblemNumber] = useState(0);

  const [openAnswer, setOpenAnswer] = useState(false);

  const [selectedChoiceNumber, setSelectedChoiceNumber] = useState<
    number | null
  >(null);

  return (
    <QuizContentPageLayout>
      {openAnswer && (
        <Toast>
          {selectedChoiceNumber === problems[problemNumber].answer ? (
            <ToastMessageBox>
              <FiSmile size={24} color={theme.colors.green500} />
              정답입니다!
            </ToastMessageBox>
          ) : (
            <ToastMessageBox>
              <FiFrown size={24} color={theme.colors.red500} />
              틀렸습니다...
            </ToastMessageBox>
          )}
        </Toast>
      )}
      <ProblemContentBox>
        <Heading2>Q{problemNumber + 1}</Heading2>
        <Heading3>{problems[problemNumber].statement}</Heading3>
      </ProblemContentBox>

      <ChoiceContainer
        choices={problems[problemNumber].choices}
        selectedChoice={
          selectedChoiceNumber === null
            ? null
            : problems[problemNumber].choices[selectedChoiceNumber]
        }
        answerChoice={
          problems[problemNumber].choices[problems[problemNumber].answer]
        }
        onSelectChoice={(choiceNumber: number) => {
          setSelectedChoiceNumber(choiceNumber);
        }}
        openAnswer={openAnswer}
      />

      {/* <VerticalSpace size={16} /> */}

      <Button
        variant="primary"
        disabled={selectedChoiceNumber === null}
        onClick={() => {
          if (openAnswer) {
            setProblemNumber(problemNumber + 1);
            setSelectedChoiceNumber(null);
            setOpenAnswer(false);
          } else {
            setOpenAnswer(true);
          }
        }}
      >
        {openAnswer
          ? problemNumber === problems.length - 1
            ? '결과보기'
            : '다음문제'
          : '정답확인'}
      </Button>
    </QuizContentPageLayout>
  );
};

export default QuizContentPage;

const QuizContentPageLayout = styled.div`
  position: relative;

  height: 100%;

  background-color: white;

  text-align: center;
  padding: 36px;
  padding-top: 36px;

  // when mounted, it will be animated
  animation: fadein 0.5s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${Button} {
    position: absolute;
    bottom: 0;

    /* center */
    left: 50%;
    transform: translateX(-50%);

    width: calc(100% - 72px);

    margin-bottom: 60px;
  }
`;

const ProblemContentBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;

  height: 160px;

  align-items: center;
  justify-content: center;
`;

const ToastMessageBox = styled.div`
  display: flex;
  gap: 8px;

  justify-content: center;
  align-items: center;
`;