import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Button from '../components/Button';
import Toast, { ToastProps } from '../components/Toast';

// Assuming you have a theme object that you pass to the ThemeProvider
const theme = {
  colors: {
    gray700: '#333333',
    // ... other colors used in your theme
  },
};

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    duration: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta;

const ToastTemplate: StoryFn<ToastProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Toast {...args} />
    </ThemeProvider>
  );
};

export const Default = ToastTemplate.bind({});
Default.args = {
  children: 'This is a toast message!',
  duration: 3000,
};

export const InteractiveToast: StoryFn<ToastProps> = (args) => {
  const [showToast, setShowToast] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Button variant="primary" onClick={() => setShowToast(true)}>
        Show Toast
      </Button>
      {showToast && <Toast {...args} />}
    </ThemeProvider>
  );
};

InteractiveToast.args = {
  children: 'This is a toast message!',
  duration: 3000,
};
