import { render } from '@testing-library/react'

import BlogPost from './BlogPost'

describe('BlogPost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogPost />)
    }).not.toThrow()
  })
})
