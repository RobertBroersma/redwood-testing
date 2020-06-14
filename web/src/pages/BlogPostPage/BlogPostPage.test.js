import { render, screen, graphql } from '@redwoodjs/testing'

import { db } from '../../../../api/dist/lib/db'

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

    expect(await screen.findByText(/Whoops!/)).toBeInTheDocument()
  })
})
