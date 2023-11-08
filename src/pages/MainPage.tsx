import styled from 'styled-components';
import { Body, Description, Heading2 } from '../designs/typographys';
import { FiChevronRight } from 'react-icons/fi';
import VerticalSpace from '../components/VerticalSpace';

const MainPage = () => {
  return (
    <MainPageLayout>
      <TitleBox>
        <Heading2>오늘의 테스트</Heading2>
        <Description>매일 업데이트 되는 테스트</Description>
      </TitleBox>
      <QuizCardContainer>
        <QuizCard>
          <QuizTitleDescriptionBox>
            <Body>빙하기가 찾아오면은 어떡해</Body>
            <Description>삐걱대는 문을 열고</Description>
          </QuizTitleDescriptionBox>
          <FiChevronRight size={24} />
        </QuizCard>
        <QuizCard>
          <QuizTitleDescriptionBox>
            <Body>MBTI 테스트</Body>
            <Description>저는 정상입니다</Description>
          </QuizTitleDescriptionBox>
          <FiChevronRight size={24} />
        </QuizCard>
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
  display: flex;
  flex-direction: column;

  padding: 18px;
  padding-top: 36px;

  ${Description}#contact {
    font-size: 12px;
    text-align: center;
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

const QuizCard = styled.div`
  display: flex;

  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 16px;
  padding: 18px 24px;

  justify-content: space-between;
  align-items: center;
`;

const QuizTitleDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;

  ${Body} {
    font-weight: 700;
  }
`;
