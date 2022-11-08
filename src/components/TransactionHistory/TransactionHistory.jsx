import PropTypes from 'prop-types';
import {
  TransactHistoryTable,
  THTableHead,
  THTableTr,
  THTableTh,
  THTableTd,
  THTableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactItems }) => {
  return (
    <TransactHistoryTable>
      <THTableHead>
        <THTableTr>
          <THTableTh>Type</THTableTh>
          <THTableTh>Amount</THTableTh>
          <THTableTh>Currency</THTableTh>
        </THTableTr>
      </THTableHead>
      <THTableBody>
        {transactItems.map(({ id, type, amount, currency }) => (
          <THTableTr key={id}>
            <THTableTd>{type}</THTableTd>
            <THTableTd>{amount}</THTableTd>
            <THTableTd>{currency}</THTableTd>
          </THTableTr>
        ))}
      </THTableBody>
    </TransactHistoryTable>
  );
};

TransactionHistory.propTypes = {
  transactItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
