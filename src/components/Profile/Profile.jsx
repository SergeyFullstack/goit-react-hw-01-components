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

export const Profile = ({ username, tag, avatar, location, stats }) => {
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
          <StatsInfo>{stats.followers}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsInfo>{stats.views}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsInfo>{stats.likes}</StatsInfo>
        </StatsItem>
      </StatsList>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};