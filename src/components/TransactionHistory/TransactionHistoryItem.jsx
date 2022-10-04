import PropTypes from 'prop-types';
export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <>
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
