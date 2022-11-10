import styled from '@emotion/styled';

export const StatisticTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  text-transform: uppercase;
  margin: ${props => props.theme.space[4]}px 0;
`;

function setBgColor({ fileName }) {
  switch (fileName) {
    case '.docx':
      return props => props.theme.colors.statDocx;
    case '.pdf':
      return props => props.theme.colors.statPdf;
    case '.mp3':
      return props => props.theme.colors.statMp3;
    case '.psd':
      return props => props.theme.colors.statPsd;
    case '.gif':
      return props => props.theme.colors.statGif;
    case '.zip':
      return props => props.theme.colors.statZip;
    case '.txt':
      return props => props.theme.colors.statTxt;
    case '.xls':
      return props => props.theme.colors.statXls;

    default:
      return props => props.theme.colors.statDefault;
  }
}
export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: calc(100% / 5);
  height: 54px;
  background-color: ${setBgColor};
  box-shadow: ${p => p.theme.shadows.cardItem};
`;

export const StatisticPercent = styled.span`
  font-size: ${props => props.theme.fontSizes.m}px;
  font-weight: ${props => props.theme.fontWeights.bold};
`;
