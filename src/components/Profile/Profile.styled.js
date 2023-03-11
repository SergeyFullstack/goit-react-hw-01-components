import styled from 'styled-components';

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding-top: 20px;
  margin-top: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 10px 10px 20px rgb(150, 150, 150);
  div {
    margin-bottom: 30px;
  }
`;

export const Avatar = styled.img`
  width: 150px;
`;

export const ProfileTitle = styled.p`
  margin-top: 15px;
  font-weight: bold;
  font-size: 20px;
`;

export const ProfileDescr = styled.p`
  margin-top: 15px;
  color: grey;
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgb(0, 240, 240);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 15px 0;
  border-top: 2px solid rgb(217, 217, 217);
  width: 33%;

  &:not(:last-child) {
    border-right: 2px solid rgb(217, 217, 217);
  }

  span:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const StatsInfo = styled.span`
  font-weight: bold;
`;
