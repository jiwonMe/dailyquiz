import styled from 'styled-components';
import theme from '../designs/theme';

// Helper function to calculate the circumference and stroke dash offset
const calculateProgress = (value: number, radius: number) => {
  const diameter = Math.PI * 2 * radius;
  const percentage = value / 100;
  return {
    circumference: diameter,
    offset: diameter - diameter * percentage,
  };
};

interface ProgressCircleProps {
  progress: number;
  className?: string;
}

const ProgressCircle = ({ progress, className }: ProgressCircleProps) => {
  const radius = 120; // Radius of the circle
  const stroke = 8; // Stroke width of the circle line
  const normalizedRadius = radius - stroke * 2;
  const circumference = calculateProgress(
    progress,
    normalizedRadius
  ).circumference;
  const strokeDashoffset = calculateProgress(progress, normalizedRadius).offset;

  return (
    <svg height={radius * 2} width={radius * 2} className={className}>
      <circle
        stroke={theme.colors.gray50}
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={theme.colors.green500}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round" // for rounded corners
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`} // to start progress from the top
      />
    </svg>
  );
};

export default styled(ProgressCircle)`
  circle {
    transition: stroke-dashoffset 0.5s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
`;
