import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

import { ThemeProvider } from 'styled-components';

import theme from '../designs/theme';

describe('Button Component', () => {
  it('renders the button with text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="primary">Click Me</Button>);
      </ThemeProvider>
    );

    expect(screen.getByText(/Click Me/i)).toBeDefined();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button variant="primary" onClick={handleClick}>
          Click Me
        </Button>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
