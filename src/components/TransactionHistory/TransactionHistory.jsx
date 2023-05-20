import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHistoryTbody,
} from 'components/TransactionHistory/TransactionHistory.styled';


export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
         <TransactionHistoryTbody>
        <TransactionItem items={transactions} />
      </TransactionHistoryTbody>
    </TransactionHistoryTable>
  );
};

const TransactionItem = ({ items }) => {
  return items.map(transaction => {
    const {id, type, amount, currency} = transaction
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};