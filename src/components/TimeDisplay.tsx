import styled from 'styled-components';
import { FiClock } from 'react-icons/fi';
import { Description } from '../designs/typographys';

interface TimeDisplayProps {
  tick: number;
}

const TimeDisplay = ({ tick }: TimeDisplayProps) => {
  return (
    <TimeDisplayLayout>
      <FiClock size={16} />
      <Description>
        {String(Math.floor(tick / 60)).padStart(2, '0')}:
        {String(tick % 60).padStart(2, '0')}
      </Description>
    </TimeDisplayLayout>
  );
};

export default TimeDisplay;

const TimeDisplayLayout = styled.div`
  display: flex;

  align-items: center;

  color: ${({ theme }) => theme.colors.gray500};

  gap: 8px;

  ${Description} {
    font-weight: 500;
  }
`;
