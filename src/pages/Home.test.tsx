import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'
import { Provider } from 'rekeep'

describe('Home Component', () => {
  let store = {
    PARTS: []
  }
  test('Home rendered', async () => {
    const { container } = render(<Provider store={store}><Home /></Provider>);
    expect(container).toBeDefined();
  })

  test('Parts list', async () => {
    store = {
      PARTS: [{id: 1, name: 'Wrench', status: 'Checked In'}]
    }
    const { container, getByText} = render(<Provider store={store}><Home /></Provider>);
    expect(getByText('Wrench')).toBeDefined()
    expect(container).toBeDefined();
  })

  test('Title must be present', async () => {
    store = {
      PARTS: []
    }
    const title = "List of all parts";
    const { container, getByText } = render(<Provider store={store}><Home /></Provider>);
    expect(getByText(title)).toBeDefined();
    expect(container).toBeDefined();
  })
})

