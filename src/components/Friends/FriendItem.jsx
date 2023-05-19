import PropTypes from 'prop-types';
import {
  Avatar,
  FriendItemStyle,
  IsOnline,
  Name,
} from 'components/Friends/Friend.styled';

export const FriendItem = ({ friends }) => {
  return friends.map(friend => {
    const { avatar, name, id, isOnline } = friend;
    return (
      <FriendItemStyle key={id}>
        <IsOnline isOnline={isOnline}></IsOnline>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{name}</Name>
      </FriendItemStyle>
    );
  });
};

FriendItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
