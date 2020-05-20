import React from 'react'
import { render } from '@testing-library/react'
import Provider from './Provider'

describe('Provider Component', () => {
  const store = {
    PARTS: []
  }
  test('Provider rendered', async () => {
    const { container } = render(<Provider store={store} />);
    expect(container).toBeDefined();
  })
})

