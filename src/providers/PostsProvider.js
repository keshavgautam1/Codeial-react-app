import { createContext } from 'react';
import { useProvidePosts } from '../hooks';

const initialState = {
  posts: [],
  loading: true,
  addPostToState: () => {},
};

const PostsContext = createContext(initialState);

const PostsProvider = ({ children }) => {
  const posts = useProvidePosts();
  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
};

export { PostsContext, PostsProvider };
