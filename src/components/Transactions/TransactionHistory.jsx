import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <table className={css.transactionHistoryTable}>
        <thead>
          <tr className={css.transactionHistoryTableHeader}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={css.transactionHistoryTableBody}>
          {transactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
