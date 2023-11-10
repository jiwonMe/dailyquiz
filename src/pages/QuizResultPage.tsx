import styled from 'styled-components';
import Button from '../components/Button';
import VerticalSpace from '../components/VerticalSpace';
import { Body, Description, Heading2 } from '../designs/typographys';
import ProgressCircle from '../components/ProgressCircle';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../stores/appStore';
import { useEffect } from 'react';

const QuizResultPage = () => {
  const naviagte = useNavigate();

  const {
    currentQuiz,
    setCurrentQuiz,
    currentSelectedAnswerIndexList,
    setCurrentSelectedAnswerIndexList,
  } = useAppStore();

  useEffect(() => {
    if (currentQuiz === null) {
      return;
    }

    // calculate correctCount
    let correctCount = 0;
    for (let i = 0; i < currentQuiz.problems.length; i++) {
      if (
        currentQuiz.problems[i].answer === currentSelectedAnswerIndexList[i] // if correct
      ) {
        correctCount++;
      }
    }

    const score = Math.floor(
      (correctCount / currentQuiz.problems.length) * 100
    );

    // update solvedHistory
    setCurrentQuiz({
      ...currentQuiz,
      solvedHistory: [
        ...currentQuiz.solvedHistory,
        {
          userId: 1,
          score,
          correctCount,
          timeSpent: 0,
          solvedAt: new Date(),
          solvedAnswers: currentSelectedAnswerIndexList,
        },
      ],
    });

    // reset currentSelectedAnswerIndexList
    setCurrentSelectedAnswerIndexList([]);
  }, []);

  if (currentQuiz === null || currentQuiz.solvedHistory.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <QuizResultPageLayout>
      <VerticalSpace size={36} />
      <TtileBox>
        <Heading2>테스트 결과</Heading2>
        <Body>{currentQuiz.title}</Body>
      </TtileBox>
      <ChartBox>
        <ProgressCircle
          progress={
            currentQuiz.solvedHistory.find((history) => history.userId === 1)
              ?.score || 0
          }
        />
        <ScoreBox>
          <ScoreText>
            {currentQuiz.solvedHistory.find((history) => history.userId === 1)
              ?.score || 0}
            점
          </ScoreText>
          <Description>
            {Math.floor(
              (currentQuiz.solvedHistory.find((history) => history.userId === 1)
                ?.timeSpent || 0) / 60
            )}
            분{' '}
            {(currentQuiz.solvedHistory.find((history) => history.userId === 1)
              ?.timeSpent || 0) % 60}
            초
          </Description>
        </ScoreBox>
      </ChartBox>
      <VerticalSpace size={32} />

      <InfoBoxWrapper>
        <CorrectnessInfoBox>
          <Description>맞은 개수</Description>
          <Body>
            {currentQuiz.solvedHistory.find((history) => history.userId === 1)
              ?.correctCount || 0}
            개
          </Body>
        </CorrectnessInfoBox>
        <CorrectnessInfoBox>
          <Description>틀린 개수</Description>
          <Body>
            {currentQuiz.problems.length -
              (currentQuiz.solvedHistory.find((history) => history.userId === 1)
                ?.correctCount || 0)}
            개
          </Body>
        </CorrectnessInfoBox>
      </InfoBoxWrapper>
      <VerticalSpace size={32} />
      <ButtonBox>
        <Button
          variant="secondary"
          onClick={() => {
            naviagte(`/quiz/${currentQuiz.id}/correct-note`);
          }}
        >
          오답노트
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            naviagte('/');
          }}
        >
          확인
        </Button>
      </ButtonBox>
    </QuizResultPageLayout>
  );
};

export default QuizResultPage;

const InfoBoxWrapper = styled.div`
  display: flex;

  justify-content: center;

  gap: 72px;
`;

const CorrectnessInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${Body} {
    font-weight: 500;
  }
`;

const ScoreText = styled(Heading2)`
  color: ${({ theme }) => theme.colors.green500};
  font-size: 2.25rem;
`;

const ScoreBox = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ChartBox = styled.div`
  position: relative;

  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  margin-bottom: 60px;
`;

const QuizResultPageLayout = styled.div`
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

const TtileBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 28px;
  gap: 8px;

  ${Body} {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;
