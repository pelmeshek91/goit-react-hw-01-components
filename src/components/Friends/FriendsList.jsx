import PropTypes from 'prop-types';
import { FriendsItem } from './FriendsItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsItem
            avatar={avatar}
            isOnline={isOnline}
            name={name}
            key={id}
          />
        );
      })}
    </ul>
  );
};

FriendsList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
