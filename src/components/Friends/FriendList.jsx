import { FriendListWrap } from 'components/Friends/Friend.styled';
import { FriendItem } from 'components/Friends/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      <FriendItem friends={friends} />
    </FriendListWrap>
  );
};
