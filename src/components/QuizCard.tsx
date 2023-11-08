import styled from 'styled-components';
import { Body, Description } from '../designs/typographys';
import { FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

interface QuizCardProps {
  title: string;
  description: string;
  className?: string;
  to?: string;
}

const QuizCard = (props: QuizCardProps) => {
  const navigate = useNavigate();

  return (
    <QuizCardLayout
      className={props.className}
      onClick={() => props.to && navigate(props.to)}
    >
      <QuizTitleDescriptionBox>
        <Body>{props.title}</Body>
        <Description>{props.description}</Description>
      </QuizTitleDescriptionBox>
      <FiChevronRight size={24} />
    </QuizCardLayout>
  );
};

export default QuizCard;

const QuizCardLayout = styled.div`
  display: flex;

  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 16px;
  padding: 18px 24px;

  justify-content: space-between;
  align-items: center;

  &:active {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;

const QuizTitleDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;

  ${Body} {
    font-weight: 700;
  }
`;
