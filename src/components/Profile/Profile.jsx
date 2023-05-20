import PropTypes from 'prop-types';
import {
  Avatar,
  ProfileDescr,
  ProfileTitle,
  ProfileWrap,
  StatsInfo,
  StatsItem,
  StatsList,
} from 'components/Profile/Profile.styled';

export const Profile = ({
  username,
  tag,
  avatar,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrap>
      <div>
        <Avatar src={avatar} alt="User avatar" />
        <ProfileTitle>{username}</ProfileTitle>
        <ProfileDescr>{tag}</ProfileDescr>
        <ProfileDescr>{location}</ProfileDescr>
      </div>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <StatsInfo>{followers}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsInfo>{views}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsInfo>{likes}</StatsInfo>
        </StatsItem>
      </StatsList>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
