import { render } from '@testing-library/react';
import React, { FC } from 'react';

import {
  ApplicationThemeProvider,
  useApplicationTheme,
} from './ApplicationTheme';

describe('hooks/ApplicationTheme', () => {
  const TestComponent: FC = () => {
    const [{ name }] = useApplicationTheme();
    return <p>{name}</p>;
  };

  it('should provide the theme correctly', () => {
    const renderer = render(
      <ApplicationThemeProvider defaultTheme="blue">
        <TestComponent />
      </ApplicationThemeProvider>,
    );

    expect(renderer.getByText('blue')).toBeInTheDocument();
  });

  it('should throw if ApplicationThemeProvider is missing', () => {
    jest.spyOn(console, 'error').mockImplementation(() => null);

    expect(() => {
      render(<TestComponent />);
    }).toThrowError('Missing wrapping ApplicationThemeProvider');
  });
});
