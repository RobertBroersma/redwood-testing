import { render, cleanup } from '@redwoodjs/testing'

import BlogLayout from './BlogLayout'

describe('BlogLayout', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders successfully', () => {
    render(<BlogLayout>hi</BlogLayout>)
  })
})
