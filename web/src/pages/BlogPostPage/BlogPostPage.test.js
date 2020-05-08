import React from 'react'
import { render, screen } from '@redwoodjs/testing'

import { QUERY } from 'src/components/BlogPostCell/BlogPostCell'

import BlogPostPage from './BlogPostPage'

describe('BlogPostPage', () => {
  it('renders successfully', async () => {
    const mocks = [
      {
        request: {
          query: QUERY,
          variables: {
            id: 'id-123',
          },
        },
        result: {
          data: {
            post: { title: 'Post Title', id: 'id-123', body: 'Test' },
          },
        },
      },
    ]

    render(<BlogPostPage id="id-123" />, { mocks })

    expect(await screen.findByText(/Post Title/)).toBeInTheDocument()
  })
})
