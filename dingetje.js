import { withCell } from "@redwoodjs/web";
import { Link, routes } from '@redwoodjs/router';
import Posts from 'src/components/Posts';
export const QUERY = gql`
  query POSTS {
    posts {
      id
      title
      body
      createdAt
    }
  }
`;
export const beforeQuery = props => {
  return {
    variables: props,
    fetchPolicy: 'cache-and-network'
  };
};
export const Loading = () => /*#__PURE__*/React.createElement("div", null, "Loading...");
export const Empty = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, 'No posts yet. ', /*#__PURE__*/React.createElement(Link, {
    to: routes.newPost(),
    className: "text-blue-500 underline hover:text-blue-700"
  }, 'Create one?'));
};
export const Success = ({
  posts
}) => {
  return /*#__PURE__*/React.createElement(Posts, {
    posts: posts
  });
};
export default withCell({
  QUERY,
  beforeQuery,
  Loading,
  Empty,
  Success
});
