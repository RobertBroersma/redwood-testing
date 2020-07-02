import { render, screen, graphql } from '@redwoodjs/testing'

import BlogPostPage from './BlogPostPage'

describe('BlogPostPage', () => {
  it('renders post succesfully', async () => {
    graphql.query('GetPost', (req, res, ctx) => {
      return res(
        ctx.data({
          post: {
            title: 'Post Title',
            id: 'id-123',
            body: 'Test',
            __typename: 'Post',
          },
        })
      )
    })

    render(<BlogPostPage id="id-123" />)

    expect(await screen.findByText(/Post Title/)).toBeInTheDocument()
  })

  it('handles errors', async () => {
    graphql.query('GetPost', (req, res, ctx) => {
      return res(
        ctx.errors([
          {
            message: 'Whoops!',
          },
        ])
      )
    })

    render(<BlogPostPage id={1} />)

    // Tests Error state
    expect(await screen.findByText(/Whoops!/)).toBeInTheDocument()
  })
})
