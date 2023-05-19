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

export const Profile = ({ username, tag, avatar, location, stats: {followers, views, likes } }) => {
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
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};