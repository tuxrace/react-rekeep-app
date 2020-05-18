import React from 'react'
import { render } from '@testing-library/react'
import Part from './Part'

describe('Part Component', () => {
  const props = {
    id: 1,
    name: 'Wrench',
    status: 'Checked In'
  }

  test('Part rendered', async () => {
    const { container } = render(<Part {...props} />);
    expect(container).toBeDefined();
  })

})

