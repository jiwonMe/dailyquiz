import styled from 'styled-components';
import Button from '../components/Button';
import VerticalSpace from '../components/VerticalSpace';
import { Body, Heading2 } from '../designs/typographys';

const QuizResultPage = () => {
  return (
    <QuizResultPageLayout>
      <VerticalSpace size={60} />
      <TtileBox>
        <Heading2>테스트 결과</Heading2>
        <Body>페스티벌 중독 테스트</Body>
      </TtileBox>
      <h2>당신은 10개의 문제 중 8개를 맞췄습니다.</h2>
      <VerticalSpace size={60} />
      <ButtonBox>
        <Button variant="secondary">오답노트</Button>
        <Button variant="primary">확인</Button>
      </ButtonBox>
    </QuizResultPageLayout>
  );
};

export default QuizResultPage;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  position: absolute;
  bottom: 0;

  /* center */
  left: 50%;
  transform: translateX(-50%);

  width: calc(100% - 72px);

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
