import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

import s from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={s.friends}>
    {friends.map(friend => (
      <FriendListItem {...friend} key={friend.id} />
    ))}
  </ul>
);

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
