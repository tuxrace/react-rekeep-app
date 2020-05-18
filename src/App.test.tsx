import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  test('App rendered', async () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  })
})

