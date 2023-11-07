import styled from 'styled-components';
import ChoiceCell from './ChoiceCell';
import { Description } from '../designs/typographys';

const ChoiceContainer = () => {
  return (
    <ChoiceContainerLayout>
      <Description>다음 중 하나를 고르세요</Description>
      <ChoiceCellBox>
        <ChoiceCell>스마트폰 어플리케이션</ChoiceCell>
        <ChoiceCell>데스크탑 웹페이지</ChoiceCell>
        <ChoiceCell variant="correct">대리 티케팅</ChoiceCell>
        <ChoiceCell variant="wrong">매크로 프로그램</ChoiceCell>
      </ChoiceCellBox>
    </ChoiceContainerLayout>
  );
};

export default ChoiceContainer;

const ChoiceContainerLayout = styled.div`
  display: flex;
  flex-direction: column;

  align-items: baseline;

  width: 100%;

  gap: 8px;
`;

const ChoiceCellBox = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;

  gap: 8px;
`;
