import { render, screen, MockedProvider } from '@redwoodjs/testing'

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

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BlogPostPage id="id-123" />
      </MockedProvider>
    )

    expect(await screen.findByText(/Post Title/)).toBeInTheDocument()
  })
})
