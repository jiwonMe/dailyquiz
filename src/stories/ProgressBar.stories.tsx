import { StoryFn, Meta } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from '../components/ProgressBar';
import { ThemeProvider } from 'styled-components';
import theme from '../designs/theme';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progressed: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as Meta;

const Template: StoryFn<ProgressBarProps> = (args) => (
  <ThemeProvider theme={theme}>
    <ProgressBar {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  progressed: 50, // Default progressed value
};

export const LowProgress = Template.bind({});
LowProgress.args = {
  progressed: 20, // Low progressed value
};

export const HighProgress = Template.bind({});
HighProgress.args = {
  progressed: 90, // High progressed value
};
