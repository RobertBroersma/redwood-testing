export const QUERY = gql`
  query {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export function Loading() {
  return <div>Loading...</div>
}

export function Empty() {
  return <div>Empty</div>
}

export function Failure({ error }) {
  return <div>Error: {error.message}</div>
}

export const Success = ({ posts }) => {
  return JSON.stringify(posts, null, 2)
}
