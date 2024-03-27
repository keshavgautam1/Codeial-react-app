import { useState } from 'react';
import styles from '../styles/home.module.css';
import { addPost } from '../api/index.js';
import { useToasts } from 'react-toast-notifications';

const CreatePost = () => {
  const [post, setPost] = useState('');
  const [addingPost, setAddingPost] = useState(false);
  const { addToast } = useToasts();

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
        vvalue={post}
        onChange={(e) => setPost(e.target.value)}
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
