import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '../src/App';

describe('App', () => {
  it('should display the welcome message', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Welcome' })).toBeInTheDocument();
  });
});
