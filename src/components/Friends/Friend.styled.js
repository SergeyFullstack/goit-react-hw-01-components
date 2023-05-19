import styled from 'styled-components';

export const FriendListWrap = styled.ul`
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const FriendItemStyle = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 20px;

  background-color: #fff;
  box-shadow: 10px 10px 20px rgb(150, 150, 150);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const IsOnline = styled.span`
  flex-shrink: 0;
  width: 15px;
  height: 15px;
  margin-right: 10px;

  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
