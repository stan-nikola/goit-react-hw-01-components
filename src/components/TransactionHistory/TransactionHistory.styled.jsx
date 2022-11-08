import styled from '@emotion/styled';

export const TransactHistoryTable = styled.table`
  overflow: hidden;

  background-color: ${props => props.theme.colors.cardBg};
  width: 616px;
  border-radius: ${props => props.theme.spacing(1)};
  border-collapse: collapse;
`;

export const THTableHead = styled.thead`
  color: ${props => props.theme.colors.cardBg};
  background-color: ${props => props.theme.colors.tableHead};
  font-weight: 600;
  font-size: 18px;
  height: 44px;
`;

export const THTableBody = styled.tbody``;

export const THTableTr = styled.tr`
  height: 32px;
  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.itemBgSecondary};
  }
`;
export const THTableTh = styled.th``;

export const THTableTd = styled.td`
  text-align: center;
  border: 1px solid ${props => props.theme.colors.itemBgSecondary};
  text-transform: capitalize;
`;
