import styled from 'styled-components';
import Button from '../components/Button';
import VerticalSpace from '../components/VerticalSpace';
import { Body, Description, Heading2 } from '../designs/typographys';
import ProgressCircle from '../components/ProgressCircle';

const QuizResultPage = () => {
  return (
    <QuizResultPageLayout>
      <VerticalSpace size={36} />
      <TtileBox>
        <Heading2>테스트 결과</Heading2>
        <Body>페스티벌 중독 테스트</Body>
      </TtileBox>
      <ChartBox>
        <ProgressCircle progress={80} />
        <ScoreBox>
          <ScoreText>80점</ScoreText>
          <Description>2분 32초</Description>
        </ScoreBox>
      </ChartBox>
      <VerticalSpace size={32} />

      <InfoBoxWrapper>
        <CorrectnessInfoBox>
          <Description>맞은 개수</Description>
          <Body>4개</Body>
        </CorrectnessInfoBox>
        <CorrectnessInfoBox>
          <Description>틀린 개수</Description>
          <Body>1개</Body>
        </CorrectnessInfoBox>
      </InfoBoxWrapper>
      <VerticalSpace size={32} />
      <ButtonBox>
        <Button variant="secondary">오답노트</Button>
        <Button variant="primary">확인</Button>
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

  /* position: absolute; */
  /* bottom: 0; */

  /* center */
  /* left: 50%; */
  /* transform: translateX(-50%); */

  /* width: calc(100% - 72px); */

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
