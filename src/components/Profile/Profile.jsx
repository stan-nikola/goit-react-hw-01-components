import PropTypes from 'prop-types'; // ES6
import defaultAvatar from '../defaultAvatar1.png';

import {
  FaTag,
  FaMapMarkerAlt,
  FaUsers,
  FaRegThumbsUp,
  FaEye,
} from 'react-icons/fa';
import {
  ProfileCard,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileInfo,
  ProfileStats,
  StatsList,
  StatsItem,
} from './Profile.styled';

export const Profile = ({
  avatar = defaultAvatar,
  name,
  tag,
  location,
  stats,
}) => {
  return (
    <ProfileCard key={name}>
      <ProfileDescription>
        <ProfileAvatar src={avatar ?? defaultAvatar} alt={name} />
        <ProfileName>{name}</ProfileName>
        <ProfileInfo>
          <FaTag />@{tag}
        </ProfileInfo>
        <ProfileInfo>
          <FaMapMarkerAlt />
          {location}
        </ProfileInfo>
      </ProfileDescription>
      <ProfileStats>
        <StatsList>
          <StatsItem>
            <FaUsers />
            {stats.followers}
          </StatsItem>
        </StatsList>
        <StatsList>
          <StatsItem>
            <FaEye />
            {stats.views}
          </StatsItem>
        </StatsList>
        <StatsList>
          <StatsItem>
            <FaRegThumbsUp />
            {stats.likes}
          </StatsItem>
        </StatsList>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
