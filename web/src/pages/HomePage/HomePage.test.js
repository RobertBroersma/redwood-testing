import { render } from '@redwoodjs/testing'

import HomePage from './HomePage'

describe('HomePage', () => {
  it('renders successfully', () => {
    expect(async () => {
      render(<HomePage />)
    }).not.toThrow()
  })
})
