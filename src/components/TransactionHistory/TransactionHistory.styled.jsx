import styled from '@emotion/styled';

export const TransactHistoryTable = styled.table`
  overflow: hidden;
  background-color: ${props => props.theme.colors.cardBg};
  width: 616px;
  border-radius: ${props => props.theme.radii.normal};
  border-collapse: collapse;
  box-shadow: ${p => p.theme.shadows.mainCard};
`;

export const THTableHead = styled.thead`
  color: ${props => props.theme.colors.cardBg};
  background-color: ${props => props.theme.colors.tableHead};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m}px;
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
  border: ${p => p.theme.borders.normal};
  border-color: ${props => props.theme.colors.itemBgSecondary};
  text-transform: capitalize;
`;
