import PropTypes from 'prop-types';
import { FriendsItem } from './FriendsItem';

export const FriendsList = ({ list }) => {
  return (
    <ul className="friend-list">
      {list.map(({ avatar, name, isOnline, id }) => {
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
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
