import styled from 'styled-components';
import { Description } from '../designs/typographys';

interface ChoiceCellProps {
  variant?: 'unselected' | 'selected' | 'correct' | 'wrong';
  children: React.ReactNode;
}

const ChoiceCell = ({ variant = 'unselected', ...props }: ChoiceCellProps) => {
  return (
    <ChoiceCellLayout variant={variant} {...props}>
      <Description>{props.children}</Description>
    </ChoiceCellLayout>
  );
};

export default ChoiceCell;

const ChoiceCellLayout = styled.div<{
  variant: 'unselected' | 'selected' | 'correct' | 'wrong';
}>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 48px;

  border-radius: 8px;

  box-sizing: border-box;

  ${({ variant, theme }) => {
    switch (variant) {
    default:
    case 'unselected':
      return `
          background-color: ${theme.colors.gray50};
        `;
    case 'selected':
      return `
          background-color: ${theme.colors.gray300};
          border: 2px solid ${theme.colors.gray500};

          ${Description} {
            font-weight: 600;
          }
        `;
    case 'correct':
      return `
          background-color: ${theme.colors.green100};
          border: 2px solid ${theme.colors.green500};
          
          ${Description} {
            color: ${theme.colors.green500};
            font-weight: 600;
          }
        `;
    case 'wrong':
      return `
          background-color: ${theme.colors.red100};
          border: 2px solid ${theme.colors.red500};

          ${Description} {
            color: ${theme.colors.red500};
            font-weight: 600;
          }
        `;
    }
  }}
`;
