import styled, { css } from 'styled-components';
import { ButtonText } from '../designs/typographys';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;

  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonLayout {...props}>
      <ButtonText>{props.children}</ButtonText>
    </ButtonLayout>
  );
};

export default Button;

const ButtonLayout = styled.button<{
  variant: 'primary' | 'secondary';
}>`
  width: 100%;
  height: 48px;

  border-radius: 8px;

  ${({ variant, theme }) => {
    switch (variant) {
    default:
    case 'primary':
      return css`
          background-color: ${theme.colors.green500};
          border: none;
          color: ${theme.colors.white};

          &:hover {
            background-color: ${theme.colors.green300};
          }
        `;
    case 'secondary':
      return css`
          background-color: transparent;
          border: 1px solid ${theme.colors.green500};
          color: ${theme.colors.green500};

          &:hover {
            background-color: ${theme.colors.green100};
          }
        `;
    }
  }}
`;
