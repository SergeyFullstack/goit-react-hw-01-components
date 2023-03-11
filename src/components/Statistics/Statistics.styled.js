import styled from 'styled-components';
export const StatisticsSection = styled.section`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
  background-color: #fff;
  overflow: hidden;  
  background-color: #fff;
  box-shadow: 10px 10px 20px rgb(150, 150, 150);
`;

export const StatisticsTitle = styled.h2`
  padding: 20px 0;
  text-align: center;
  color: grey;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StatisticsItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 20%;
  background-color: ${({ backgrounds }) => backgrounds};

  padding: 10px 0;
  font-weight: 500;
`;
