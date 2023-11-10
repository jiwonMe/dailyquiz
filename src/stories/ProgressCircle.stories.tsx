import { StoryFn, Meta } from '@storybook/react';
import ProgressCircle, {
  ProgressCircleProps,
} from '../components/ProgressCircle';
import { ThemeProvider } from 'styled-components';
import theme from '../designs/theme';

export default {
  title: 'Components/ProgressCircle',
  component: ProgressCircle,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as Meta;

const Template: StoryFn<ProgressCircleProps> = (args) => (
  <ThemeProvider theme={theme}>
    <ProgressCircle {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  progress: 50, // Default progress value
};

export const Empty = Template.bind({});
Empty.args = {
  progress: 0, // No progress
};

export const Half = Template.bind({});
Half.args = {
  progress: 50, // Half progress
};

export const Full = Template.bind({});
Full.args = {
  progress: 100, // Full progress
};
