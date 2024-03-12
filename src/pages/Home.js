import PropTypes from 'prop-types';
import styles from '../styles/home.module.css';
import { UserPic, LikePic, CommentPic } from '../assets/images/index';
import { Comment } from '../components/index.js';

const Home = ({ posts }) => {
  // console.log(posts);
  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <div className={styles.postWrapper} key={`post-${post._id}`}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <img src={UserPic} alt="user-pic" />
              <div>
                <span className={styles.postAuthor}>{post.user.name}</span>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.content}</div>

            <div className={styles.postActions}>
              <div className={styles.postLike}>
                <img src={LikePic} alt="likes-icon" />
                <span>5</span>
              </div>

              <div className={styles.postCommentsIcon}>
                <img src={CommentPic} alt="comments-icon" />
                <span>2</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="Start typing a comment" />
            </div>

            <div className={styles.postCommentsList}>
              {post.comments.map((comment) => (
                <Comment comment={comment} key={`comment-${comment._id}`} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Home;
