import styled from 'styled-components';
import Button from '../components/Button';

import ProgressBar from '../components/ProgressBar';
import { Body, Heading2, Heading3 } from '../designs/typographys';
import ChoiceContainer from '../components/ChoiceContainer';
import { useMemo, useState } from 'react';
import VerticalSpace from '../components/VerticalSpace';

import { useNavigate } from 'react-router-dom';
import useAppStore from '../stores/appStore';

import he from 'he';

const QuizCorrectNotePage = () => {
  const navigate = useNavigate();

  const [problemNumber, setProblemNumber] = useState(0); // -1: before start

  const { currentQuiz } = useAppStore();

  const solvedAnswers = useMemo(() => {
    if (currentQuiz === null) {
      return [];
    }

    return currentQuiz.solvedHistory.find(
      (solvedHistory) => solvedHistory.userId === 1
    )!.solvedAnswers;
  }, [currentQuiz]);

  if (currentQuiz === null) {
    return <div>Loading...</div>;
  }
  return (
    <QuizCorrectNotePageLayout>
      <ProgressBar
        progressed={((problemNumber + 1) / currentQuiz.problems.length) * 100}
      />

      <ProblemContentBox>
        <Heading2>Q{problemNumber + 1}</Heading2>
        <Heading3>
          {he.decode(currentQuiz.problems[problemNumber].statement)}
        </Heading3>
      </ProblemContentBox>

      <ChoiceContainer
        choices={currentQuiz.problems[problemNumber].choices}
        selectedChoice={
          solvedAnswers[problemNumber] === null
            ? null
            : currentQuiz.problems[problemNumber].choices[
              solvedAnswers[problemNumber]
            ]
        }
        answerChoice={
          currentQuiz.problems[problemNumber].choices[
            currentQuiz.problems[problemNumber].answer
          ]
        }
        onSelectChoice={() => {}}
        openAnswer={true}
      />
      <VerticalSpace size={24} />
      <CommentaryBox>
        <Body>
          <b>정답 </b>
          {he.decode(
            currentQuiz.problems[problemNumber].choices[
              currentQuiz.problems[problemNumber].answer
            ]
          )}
          <br />
          <b>내가 선택한 답 </b>
          <span
            className={
              solvedAnswers[problemNumber] ===
              currentQuiz.problems[problemNumber].answer
                ? 'correct'
                : 'wrong'
            }
          >
            {he.decode(
              currentQuiz.problems[problemNumber].choices[
                solvedAnswers[problemNumber]
              ]
            )}
          </span>
        </Body>
      </CommentaryBox>
      <VerticalSpace size={24} />
      <ButtonBox>
        <Button
          variant="secondary"
          disabled={problemNumber === 0}
          onClick={() => {
            setProblemNumber(problemNumber - 1);
          }}
        >
          이전 문제
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            if (problemNumber === currentQuiz.problems.length - 1) {
              navigate('/');
            } else {
              setProblemNumber(problemNumber + 1);
            }
          }}
        >
          {problemNumber === currentQuiz.problems.length - 1
            ? '마치기'
            : '다음 문제'}
        </Button>
      </ButtonBox>
    </QuizCorrectNotePageLayout>
  );
};

export default QuizCorrectNotePage;

const QuizCorrectNotePageLayout = styled.div`
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
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;

  margin-bottom: 60px;
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

const CommentaryBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;

  align-items: left;
  justify-content: center;

  text-align: left;

  word-break: keep-all;
  ${Body} {
    color: ${({ theme }) => theme.colors.gray500};

    span.correct {
      color: ${({ theme }) => theme.colors.green500};
    }
    span.wrong {
      color: ${({ theme }) => theme.colors.red500};
    }
  }
`;
