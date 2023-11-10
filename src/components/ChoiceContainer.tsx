import styled from 'styled-components';
import ChoiceCell from './ChoiceCell';
import { Description } from '../designs/typographys';

export interface ChoiceContainerProps {
  choices: string[];
  selectedChoice: string | null;
  answerChoice: string | null;

  openAnswer: boolean;
  onSelectChoice: (choiceNumber: number) => void;

  className?: string;
}

const ChoiceContainer = (props: ChoiceContainerProps) => {
  return (
    <ChoiceContainerLayout>
      <Description>다음 중 하나를 고르세요</Description>
      <ChoiceCellBox>
        {props.choices.map((choice) => (
          <ChoiceCell
            key={choice}
            variant={
              props.openAnswer
                ? choice === props.answerChoice
                  ? 'correct'
                  : choice === props.selectedChoice
                    ? 'wrong'
                    : 'unselected'
                : choice === props.selectedChoice
                  ? 'selected'
                  : 'unselected'
            }
            onClick={() =>
              props.openAnswer
                ? undefined
                : props.onSelectChoice(props.choices.indexOf(choice))
            }
          >
            {choice}
          </ChoiceCell>
        ))}
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
