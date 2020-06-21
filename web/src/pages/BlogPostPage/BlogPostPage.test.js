import { render, screen, graphql, db } from '@redwoodjs/testing'

import BlogPostPage from './BlogPostPage'

describe('BlogPostPage', () => {
  it('renders posts from the database', async () => {
    const newPost = await db.post.create({
      data: {
        title: 'Test post',
        body: 'Test post content!',
      },
    })

    render(<BlogPostPage id={newPost.id} />)

    // Tests Loading state
    expect(screen.getByText(/Loading/i)).toBeInTheDocument()

    // Tests Success state
    expect(await screen.findByText(/Test post/)).toBeInTheDocument()
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
