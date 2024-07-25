import styles from '../styles/home.module.css';
import { useAuth } from '../hooks/index';
import { Link } from 'react-router-dom';

const FriendsList = () => {
  const auth = useAuth();
  const { friends = [] } = auth.user;

  return (
    <div className={styles.friendsList}>
      <div className={styles.header}>Friend</div>

      {friends && friends.length === 0 && (
        <div className={styles.noFriends}>No friends found!</div>
      )}

      {friends &&
        friends.map((friend) => (
          <div key={`friend-${friend._id}`}>
            <Link className={styles.friendsItem} to={`/user/${friend._id}`}>
              <div className={styles.friendImg}>
                <img src={friend.avatar} alt={friend.name} />
              </div>
              <div className={styles.friendsName}>{friend.to_user.email}</div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default FriendsList;
