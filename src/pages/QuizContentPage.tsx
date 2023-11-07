import styled from 'styled-components';
import { Heading2, Heading3 } from '../designs/typographys';

import ChoiceContainer from '../components/ChoiceContainer';
import Button from '../components/Button';

const QuizContentPage = () => {
  return (
    <QuizContentPageLayout>
      <ProblemContentBox>
        <Heading2>Q1</Heading2>
        <Heading3>
          오늘은 대망의 티케팅 날, <br />
          내가 선택한 티케팅 방법은?
        </Heading3>
      </ProblemContentBox>

      <ChoiceContainer></ChoiceContainer>

      {/* <VerticalSpace size={16} /> */}

      <Button variant="primary">다음</Button>
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
