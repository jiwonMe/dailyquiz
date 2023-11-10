import styled from 'styled-components';
import Button from '../components/Button';
import VerticalSpace from '../components/VerticalSpace';
import { Body, Description, Heading2 } from '../designs/typographys';
import ProgressCircle from '../components/ProgressCircle';
import { useNavigate } from 'react-router-dom';
import useQuizResult from '../hooks/useQuizResult';

const QuizResultPage = () => {
  const naviagte = useNavigate();
  const currentQuiz = useQuizResult();

  if (!currentQuiz || currentQuiz.solvedHistory.length === 0) {
    return <div>Loading...</div>;
  }

  const latestHistory =
    currentQuiz.solvedHistory[currentQuiz.solvedHistory.length - 1];
  const { score, correctCount, timeSpent } = latestHistory;

  return (
    <QuizResultPageLayout>
      <VerticalSpace size={36} />
      <TtileBox>
        <Heading2>테스트 결과</Heading2>
        <Body>{currentQuiz.title}</Body>
      </TtileBox>
      <ChartBox>
        <ProgressCircle progress={score || 0} />
        <ScoreBox>
          <ScoreText>{score || 0}점</ScoreText>
          <Description>
            {Math.floor((timeSpent || 0) / 60)}분 {(timeSpent || 0) % 60}초
          </Description>
        </ScoreBox>
      </ChartBox>
      <VerticalSpace size={32} />

      <InfoBoxWrapper>
        <CorrectnessInfoBox>
          <Description>맞은 개수</Description>
          <Body>{correctCount || 0}개</Body>
        </CorrectnessInfoBox>
        <CorrectnessInfoBox>
          <Description>틀린 개수</Description>
          <Body>{currentQuiz.problems.length - (correctCount || 0)}개</Body>
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
