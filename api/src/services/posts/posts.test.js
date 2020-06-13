import { db } from '../../lib/db'

import { posts, post, createPost, updatePost, deletePost } from './posts'

describe('Post Service', () => {
  it('posts returns all posts', async () => {
    const newPost1 = await db.post.create({
      data: {
        title: 'Post 1',
        body: 'Test',
      },
    })

    const newPost2 = await db.post.create({
      data: {
        title: 'Post 2',
        body: 'Test',
      },
    })

    expect(await posts()).toEqual([newPost1, newPost2])
  })

  it('post returns the post by id', async () => {
    const newPost = await db.post.create({
      data: {
        title: 'Test',
        body: 'Test',
      },
    })

    expect(await post({ id: newPost.id })).toEqual(newPost)
  })

  it('createPost returns newly created post', async () => {
    const input = {
      title: 'Post 1',
      body: 'Test',
    }
    const newPost = await createPost({ input })

    expect(newPost).toEqual(expect.objectContaining(input))
    expect(await db.post.findMany()).toHaveLength(1)
    expect(await db.post.findOne({ where: { id: newPost.id } })).toEqual(
      expect.objectContaining(newPost)
    )
  })

  it('updatePost returns updated post', async () => {
    const newPost = await db.post.create({
      data: {
        title: 'Post 1',
        body: 'Test',
      },
    })

    const input = {
      title: 'Updated Post 1',
      body: 'Updated Test',
    }

    const updatedPost = await updatePost({
      id: newPost.id,
      input,
    })

    expect(updatedPost).toEqual(expect.objectContaining(input))
    expect(await db.post.findMany()).toHaveLength(1)
    expect(await db.post.findOne({ where: { id: newPost.id } })).toEqual(
      expect.objectContaining(updatedPost)
    )
  })

  it('deletePost returns deleted post', async () => {
    const newPost = await db.post.create({
      data: {
        title: 'Post 1',
        body: 'Test',
      },
    })

    const deletedPost = await deletePost({ id: newPost.id })

    expect(deletedPost).toEqual(newPost)
    expect(await db.post.findMany()).toHaveLength(0)
    expect(await db.post.findOne({ where: { id: newPost.id } })).toEqual(null)
  })
})
