import styled from 'styled-components';
import { Description, Heading2 } from '../designs/typographys';
import { FiUser } from 'react-icons/fi';
import VerticalSpace from '../components/VerticalSpace';
import QuizCard from '../components/QuizCard';
import dummyData from '../types/dummyData';

const MainPage = () => {
  const quizzes = dummyData.quizzes;

  return (
    <MainPageLayout>
      <ProfileBox>
        <FiUser size={24} />
      </ProfileBox>
      <TitleBox>
        <Heading2>오늘의 테스트</Heading2>
        <Description>매일 업데이트 되는 테스트</Description>
      </TitleBox>
      <QuizCardContainer>
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </QuizCardContainer>
      <VerticalSpace size={16} />
      <Description className="contact">
        콘텐츠 제작 문의: park@jiwon.me
      </Description>
    </MainPageLayout>
  );
};

export default MainPage;

const MainPageLayout = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  padding: 18px;
  padding-top: 36px;

  ${Description}#contact {
    font-size: 12px;
    text-align: center;
  }
`;

const ProfileBox = styled.div`
  position: absolute;
  top: 36px;
  right: 36px;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;

  &:active {
    background-color: ${({ theme }) => theme.colors.gray50};
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 18px;
  margin-bottom: 28px;
  gap: 4px;
`;

const QuizCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;
