import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendList/FriendListItem/FriendListItem';
import { FriendsCard } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsCard>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendsCard>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
