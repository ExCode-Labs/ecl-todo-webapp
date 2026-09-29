import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';

describe('App', () => {
  it('should display the Your Task message', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Your Tasks.' })).toBeInTheDocument();
  });
});
