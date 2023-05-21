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
