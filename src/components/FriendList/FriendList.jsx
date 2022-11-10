import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendList/FriendListItem/FriendListItem';

import { Box } from 'components/Box/Box';

export const FriendList = ({ friends }) => {
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={300}
      bg="cardBg"
      borderRadius="normal"
      py={3}
      boxShadow="mainCard"
    >
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Box>
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
