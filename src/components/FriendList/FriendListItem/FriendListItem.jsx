import PropTypes from 'prop-types';
import {
  FriendItem,
  OnlineMarker,
  FriendAvatar,
  FriendName,
} from '../FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <OnlineMarker status={+isOnline}></OnlineMarker>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName className="name">{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
