import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading2 } from '../designs/typographys';
import { Quiz } from '../types/Quiz';
import tempImage from '../assets/img/temp_image.png';

import he from 'he';

interface QuizStartPageProps {
  quiz: Quiz;
  onClickStartButton: () => void;
}

const QuizStartPage = (props: QuizStartPageProps) => {
  return (
    <QuizStartPageLayout>
      <QuizImageBox src={tempImage} />
      <TitleBox>
        <Heading2>{props.quiz.title}</Heading2>
        <Description>{he.decode(props.quiz.description)}</Description>
      </TitleBox>
      <TestDescriptionBox>
        <Description>
          선택형 {props.quiz.problems.length}문항, 제한시간 없음
        </Description>
      </TestDescriptionBox>
      <Button variant="primary" onClick={props.onClickStartButton}>
        시작하기
      </Button>
    </QuizStartPageLayout>
  );
};

export default QuizStartPage;

const QuizStartPageLayout = styled.div`
  text-align: center;
  padding: 36px;
  padding-top: 80px;
`;

const QuizImageBox = styled.img`
  width: 256px;
  height: 256px;
  margin-bottom: 28px;

  border: 1px solid ${({ theme }) => theme.colors.gray100};

  border-radius: 24px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 28px;
  gap: 8px;
`;

const TestDescriptionBox = styled.div`
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 28px;
`;
