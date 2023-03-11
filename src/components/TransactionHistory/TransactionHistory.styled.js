import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  background-color: red;

  width: 500px;
  margin: 0 auto;
  border-collapse: collapse;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 10px 10px 20px rgb(150, 150, 150);
  thead {
    border-radius: 50%;
    background-color: #00b5ff;
    color: #fff;
  }
  tr {
  }

  th {
    padding: 10px 0;
  }
  th:not(:last-child) {
    border-right: solid 2px rgb(224, 224, 224);
  }
`;

export const TransactionHistoryTbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f4f4f4;
  }

  td {
    padding: 10px 15px;
    text-align: center;
    border: 1px solid rgb(224, 224, 224);
  }
`;
