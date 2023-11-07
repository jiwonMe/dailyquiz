// Toast.tsx
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Description } from '../designs/typographys';

interface ToastProps {
  children?: React.ReactNode;
  duration?: number;
}

const Toast = ({ children, duration = 3000 }: ToastProps) => {
  const [show, setShow] = useState(false);

  // Show the toast
  useEffect(() => {
    setShow(true);
  }, []);

  // Hide the toast after the duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <ToastLayout show={show}>
      <Description>{children}</Description>
    </ToastLayout>
  );
};

export default styled(Toast)``;

const fadeIn = keyframes`
from {
  top: 0;
  opacity: 0;
}
to {
  top: 20px;
  opacity: 1;
}
`;

const ToastLayout = styled.div<{ show: boolean }>`
  position: fixed;
  z-index: 1000;

  top: ${(props) => (props.show ? '20px' : '0px')};
  left: 50%;
  transform: translateX(-50%);

  min-width: 220px;
  max-width: calc(100% - 72px);

  height: 48px;
  padding: 0px 36px;
  border-radius: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.gray700};
  color: white;
  opacity: ${(props) => (props.show ? '1' : '0')};

  animation: ${fadeIn} 0.5s ease-out;
  transition: opacity 0.5s, top 0.5s;

  pointer-events: ${(props) => (props.show ? 'auto' : 'none')};

  ${Description} {
    color: white;
    font-weight: 500;
  }
`;
