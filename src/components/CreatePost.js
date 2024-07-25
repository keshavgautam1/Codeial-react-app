import { useState } from 'react';
import styles from '../styles/home.module.css';
import { addPost } from '../api/index.js';
import { useToasts } from 'react-toast-notifications';
import { usePosts } from '../hooks';

const CreatePost = () => {
  const [post, setPost] = useState('');
  const [addingPost, setAddingPost] = useState(false);
  const { addToast } = useToasts();
  const posts = usePosts();

  const handleAddPostClick = async () => {
    if (!post || !post.trim()) {
      addToast('Please enter something to post.', {
        appearance: 'warning',
      });
      return;
    }

    setAddingPost(true);

    const response = await addPost(post);
    if (response.success) {
      setPost('');
      posts.addPostToState(response.data.post);
      addToast('Post added successfully.', {
        appearance: 'success',
      });
    } else {
      addToast(response.message, {
        appearance: 'error',
      });
    }
    setAddingPost(false);
  };

  return (
    <div className={styles.createPost}>
      <textarea
        className={styles.addPost}
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Hey, You can type here anything you want to post..."
      />

      <div>
        <button
          className={styles.addPostBtn}
          onClick={handleAddPostClick}
          disabled={addingPost}
        >
          {addingPost ? 'Adding post...' : 'Add Post'}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
