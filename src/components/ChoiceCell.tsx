import styled, { css, keyframes } from 'styled-components';
import { Description } from '../designs/typographys';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import he from 'he';

export interface ChoiceCellProps {
  variant?: 'unselected' | 'selected' | 'correct' | 'wrong';
  onClick?: () => void;
  children: React.ReactNode;
}

const ChoiceCell = ({ variant = 'unselected', ...props }: ChoiceCellProps) => {
  return (
    <ChoiceCellLayout variant={variant} {...props}>
      <CellIcon>
        {
          {
            unselected: '',
            selected: '',
            correct: <FiCheckCircle size={20} />,
            wrong: <FiXCircle size={20} />,
          }[variant]
        }
      </CellIcon>
      <Description>{he.decode(String(props.children))}</Description>
    </ChoiceCellLayout>
  );
};

export default ChoiceCell;

const CellIcon = styled.div`
  position: absolute;

  left: 16px;
  top: 50%;
  transform: translateY(-50%);

  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// cell vibrate horizontally
const wrongAnimation = keyframes`
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-4px);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(4px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const ChoiceCellLayout = styled.div<{
  variant: 'unselected' | 'selected' | 'correct' | 'wrong';
}>`
  position: relative;

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
      return css`
          background-color: ${theme.colors.gray50};
        `;
    case 'selected':
      return css`
          background-color: ${theme.colors.gray300};
          border: 2px solid ${theme.colors.gray500};

          ${Description} {
            font-weight: 600;
          }
        `;
    case 'correct':
      return css`
          background-color: ${theme.colors.green100};
          border: 2px solid ${theme.colors.green500};
          color: ${theme.colors.green500};

          ${Description} {
            color: ${theme.colors.green500};
            font-weight: 600;
          }
        `;
    case 'wrong':
      return css`
          background-color: ${theme.colors.red100};
          border: 2px solid ${theme.colors.red500};
          color: ${theme.colors.red500};

          ${Description} {
            color: ${theme.colors.red500};
            font-weight: 600;
          }

          animation: ${wrongAnimation} 0.2s ease-in-out;
        `;
    }
  }}
`;
