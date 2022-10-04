import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';

export const TransactionHistory = ({ transaction }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transaction.map(trans => (
          <TransactionHistoryItem {...trans} />
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transaction: PropTypes.shape().isRequired,
};
