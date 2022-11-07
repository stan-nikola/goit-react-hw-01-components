import { FriendListItem } from '../FriendList/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, id }) => (
        <FriendListItem key={id} avatar={avatar} name={name} />
      ))}
    </ul>
  );
};
