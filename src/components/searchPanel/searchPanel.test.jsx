import React from 'react';
import { Provider } from 'react-redux';
import SearchPanel from './searchPanel';
import store from '../../store/store';
import {render, fireEvent} from '@testing-library/react';


const setup = () => {
  const utils = render(<Provider store={store}><SearchPanel /></Provider>)
  const input = utils.getByPlaceholderText('search');
  return {
    input,
    ...utils,
  }
}

test('input test', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '23' } })
  expect(input.value).toBe('23')
})
