// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import BlogPostPage from 'src/pages/BlogPostPage'
import NewPostPage from 'src/pages/NewPostPage'
import EditPostPage from 'src/pages/EditPostPage'
import PostPage from 'src/pages/PostPage'
import PostsPage from 'src/pages/PostsPage'
import AboutPage from 'src/pages/AboutPage'
import HomePage from 'src/pages/HomePage'
import NotFoundPage from 'src/pages/NotFoundPage'
import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/blog-post" page={BlogPostPage} name="blogPost" />
      <Route path="/posts/new" page={NewPostPage} name="newPost" />
      <Route path="/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
      <Route path="/posts/{id:Int}" page={PostPage} name="post" />
      <Route path="/posts" page={PostsPage} name="posts" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
