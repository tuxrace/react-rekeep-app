import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CreatePart from './CreatePart'
import { Provider } from 'rekeep'
import { MemoryRouter } from 'react-router-dom'

describe('CreatePart Component', () => {

  const store = {
    PARTS: []
  }
  
  test('CreatePart rendered', async () => {
    const { container, getByText, getByTestId } = render(<Provider store={store}><MemoryRouter><CreatePart /></MemoryRouter></Provider>);
    fireEvent.change(getByTestId('part-id'));
    fireEvent.change(getByTestId('part-name'));
    fireEvent.click(getByText('Submit'));
    expect(container).toBeDefined();
  })

})
