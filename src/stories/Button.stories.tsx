import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../components/Button';
import { ThemeProvider } from 'styled-components';
import theme from '../designs/theme';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
  variant: 'primary',
  disabled: true,
  children: 'Disabled Primary Button',
};

export const DisabledSecondary = Template.bind({});
DisabledSecondary.args = {
  variant: 'secondary',
  disabled: true,
  children: 'Disabled Secondary Button',
};
