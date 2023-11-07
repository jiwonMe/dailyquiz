import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading2 } from '../designs/typographys';

const MainPage = () => {
  return (
    <MainPageLayout>
      <TitleBox>
        <Heading2>페스티벌 중독자 테스트</Heading2>
        <Description>춤을 추며 절망이랑 싸울거야</Description>
      </TitleBox>
      <Button variant="primary">시작하기</Button>
    </MainPageLayout>
  );
};

export default MainPage;

const MainPageLayout = styled.div`
  text-align: center;
  padding: 36px;
`;

const TitleBox = styled.div`
  margin-bottom: 24px;
  gap: 8px;
`;
