import styled from 'styled-components';
import { Description, Heading2 } from '../designs/typographys';
import { FiUser } from 'react-icons/fi';
import VerticalSpace from '../components/VerticalSpace';
import QuizCard from '../components/QuizCard';

const MainPage = () => {
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
        <QuizCard
          title="페스티벌 중독 테스트"
          description="춤을 추며 절망이랑 싸울거야"
          to="/quiz/1"
        />
        <QuizCard
          title="MBTI 테스트"
          description="저는 정상입니다"
          to="/quiz/2"
        />
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
