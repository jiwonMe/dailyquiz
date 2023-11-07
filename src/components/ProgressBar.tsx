import styled from 'styled-components';

interface ProgressBarProps {
  progressed: number;
  className?: string;
}

const ProgressBar = (props: ProgressBarProps) => {
  return (
    <ProgressBarLayout className={props.className}>
      <ProgressedBar progressed={props.progressed} />
    </ProgressBarLayout>
  );
};

export default ProgressBar;

const ProgressBarLayout = styled.div`
  width: 100%;
  height: 8px;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.gray50};
`;

const ProgressedBar = styled.div<{
  progressed: number;
}>`
  width: ${({ progressed }) => progressed}%;
  height: 100%;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.green500};
`;
