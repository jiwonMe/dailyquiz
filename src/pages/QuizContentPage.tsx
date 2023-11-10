import styled from 'styled-components';
import { Description, Heading2, Heading3 } from '../designs/typographys';

import ChoiceContainer from '../components/ChoiceContainer';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { Problem } from '../types/Problem';
import Toast from '../components/Toast';

import { FiSmile, FiFrown } from 'react-icons/fi';
import theme from '../designs/theme';
import ProgressBar from '../components/ProgressBar';
import TimeDisplay from '../components/TimeDisplay';
import useAppStore from '../stores/appStore';

import he from 'he';

interface QuizContentPageProps {
  problems: Problem[];
  problemIndex: number;
  setProblemIndex: React.Dispatch<React.SetStateAction<number>>;
}

const QuizContentPage = ({
  problems,
  problemIndex,
  setProblemIndex,
}: QuizContentPageProps) => {
  const [openAnswer, setOpenAnswer] = useState(false);

  const { currentSelectedAnswerIndexList, setCurrentSelectedAnswerIndexList } =
    useAppStore();

  const [selectedChoiceNumber, setSelectedChoiceNumber] = useState<
    number | null
  >(null);

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTick(tick + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <QuizContentPageLayout>
      {openAnswer && (
        <Toast>
          {selectedChoiceNumber === problems[problemIndex].answer ? (
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
      <TopInfoBox>
        <TimeDisplay tick={tick} />
        <Description>
          {/* remain problems */}
          {problems.length - problemIndex - 1}문제 남음
        </Description>
      </TopInfoBox>

      <ProgressBar progressed={((problemIndex + 1) / problems.length) * 100} />

      <ProblemContentBox>
        <Heading2>Q{problemIndex + 1}</Heading2>
        <Heading3>
          {he.decode(
            problems[problemIndex].choices[problems[problemIndex].answer]
          )}
        </Heading3>
      </ProblemContentBox>

      <ChoiceContainer
        choices={problems[problemIndex].choices}
        selectedChoice={
          selectedChoiceNumber === null
            ? null
            : problems[problemIndex].choices[selectedChoiceNumber]
        }
        answerChoice={
          problems[problemIndex].choices[problems[problemIndex].answer]
        }
        onSelectChoice={(choiceNumber: number) => {
          setSelectedChoiceNumber(choiceNumber);
        }}
        openAnswer={openAnswer}
      />

      <Button
        variant="primary"
        disabled={selectedChoiceNumber === null}
        onClick={() => {
          if (openAnswer) {
            setProblemIndex(problemIndex + 1);
            setSelectedChoiceNumber(null);
            setOpenAnswer(false);
          } else {
            setOpenAnswer(true);
            if (selectedChoiceNumber === null) return;
            setCurrentSelectedAnswerIndexList([
              ...currentSelectedAnswerIndexList,
              selectedChoiceNumber,
            ]);
          }
        }}
      >
        {openAnswer
          ? problemIndex === problems.length - 1
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

const TopInfoBox = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;

  ${Description} {
    font-weight: 500;
  }
`;

const ProblemContentBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;

  height: 160px;

  align-items: center;
  justify-content: center;

  word-break: keep-all;
`;

const ToastMessageBox = styled.div`
  display: flex;
  gap: 8px;

  justify-content: center;
  align-items: center;
`;
