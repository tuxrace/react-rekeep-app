import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

describe('Header Component', () => {
  test('Header rendered', async () => {
    const { container } = render(<BrowserRouter><Header /></BrowserRouter>);
    expect(container).toBeDefined();
  })

  test('Header title', async () => {
    const title = 'Parts Store'
    const { container, getByText } = render(<BrowserRouter><Header /></BrowserRouter>);
    expect(getByText(title)).toBeDefined();
    expect(container).toBeDefined();
  })
})

