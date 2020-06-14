import { db } from 'src/lib/db'

export const posts = async () => {
  console.log('get posts')

  try {
    const res = await db.post.findMany()
    console.log('RESOLVER FOUND', res)
  } catch (e) {
    console.error('DITTEM', e)
  }
}

export const post = ({ id }) => {
  return db.post.findOne({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  return db.post.create({
    data: input,
  })
}

export const updatePost = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}
