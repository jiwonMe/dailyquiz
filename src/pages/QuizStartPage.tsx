import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading2 } from '../designs/typographys';
import test_image from '../assets/img/test_image.png';

interface QuizStartPageProps {
  onClickStartButton: () => void;
}

const QuizStartPage = (props: QuizStartPageProps) => {
  return (
    <QuizStartPageLayout>
      <QuizImageBox src={test_image} />
      <TitleBox>
        <Heading2>페스티벌 중독자 테스트</Heading2>
        <Description>춤을 추며 절망이랑 싸울거야</Description>
      </TitleBox>
      <TestDescriptionBox>
        <Description>선택형 5문항, 제한시간 없음</Description>
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
