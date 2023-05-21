import PropTypes from 'prop-types';
import { FriendListWrap } from 'components/Friends/Friend.styled';
import { FriendItem } from 'components/Friends/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      {
        friends.map((friend) => (
          <FriendItem
            key={friend.id}
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline} /> 
        )
        )
      }
     
    </FriendListWrap>
  );
};


FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
 }).isRequired).isRequired

}
























// import { FriendListWrap } from 'components/Friends/Friend.styled';
// import { FriendItem } from 'components/Friends/FriendItem';

// export const FriendList = ({ friends }) => {
//   return (
//     <FriendListWrap>
//       <FriendItem friends={friends} />
//     </FriendListWrap>
//   );
// };
