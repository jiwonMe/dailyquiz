import { StoryFn, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import QuizCard, { QuizCardProps } from '../components/QuizCard';
import styled, { ThemeProvider } from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';
import { Quiz } from '../types/Quiz';
import { Body, Description } from '../designs/typographys';
import theme from '../designs/theme';

const mockQuiz: Quiz = {
  id: '1',
  title: 'Sample Quiz Title',
  description: 'This is a sample description for the quiz card.',

  problems: [],
  createdAt: new Date(),
  updatedAt: new Date(),

  image: 'https://picsum.photos/256',

  // Mocked user data
  author: 'sample user',
  solvedHistory: [],
};

export default {
  title: 'Components/QuizCard',
  component: QuizCard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Router>
          <Story />
        </Router>
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<QuizCardProps> = (args) => <MockQuizCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  quiz: mockQuiz,
};

// Create a mock for useNavigate hook
const MockQuizCard = (props: QuizCardProps) => {
  return (
    <QuizCardLayout
      onClick={() => {
        console.log('Clicked!');
      }}
    >
      <QuizTitleDescriptionBox>
        <Body>{props.quiz.title}</Body>
        <Description>{props.quiz.description}</Description>
      </QuizTitleDescriptionBox>
      <FiChevronRight size={24} />
    </QuizCardLayout>
  );
};

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
