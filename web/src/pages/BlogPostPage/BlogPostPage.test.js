import { render, screen, server, graphql } from '@redwoodjs/testing'

import BlogPostPage from './BlogPostPage'

describe('BlogPostPage', () => {
  it('renders successfully', async () => {
    server.use(
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
    )

    render(<BlogPostPage id="id-123" />)

    expect(await screen.findByText(/Post Title/)).toBeInTheDocument()
  })
})
