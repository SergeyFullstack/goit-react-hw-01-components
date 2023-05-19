import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHistoryTbody,
} from 'components/TransactionHistory/TransactionHistory.styled';
import { TransactionItem } from 'components/TransactionHistory/TransactionItem';

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

TransactionItem.propTypes = {
   transactions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
   
      
};

