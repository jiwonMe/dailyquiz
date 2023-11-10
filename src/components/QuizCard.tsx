import styled from 'styled-components';
import { Body, Description } from '../designs/typographys';
import { FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Quiz } from '../types/Quiz';

import he from 'he';

export interface QuizCardProps {
  quiz: Quiz;
  className?: string;
}

const QuizCard = (props: QuizCardProps) => {
  const navigate = useNavigate();

  return (
    <QuizCardLayout
      className={props.className}
      onClick={() => {
        navigate(`/quiz/${props.quiz.id}`);
      }}
    >
      <QuizTitleDescriptionBox>
        <Body>{props.quiz.title}</Body>
        <Description>{he.decode(props.quiz.description)}</Description>
      </QuizTitleDescriptionBox>
      <ChevronRight size={24} />
    </QuizCardLayout>
  );
};

export default QuizCard;

const ChevronRight = styled(FiChevronRight)`
  min-width: 24px;
  min-height: 24px;
`;

const QuizCardLayout = styled.div`
  display: flex;

  word-break: keep-all;

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
