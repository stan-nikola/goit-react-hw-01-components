import styled from '@emotion/styled';

export const StatisticCard = styled.section`
  width: 300px;

  border-radius: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.cardBg};
  box-shadow: ${props => props.theme.boxShadow.mainCard};
  overflow: hidden;
  margin-top: ${props => props.theme.spacing(4)};
`;

export const StatisticTitle = styled.h2`
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  margin: ${props => props.theme.spacing(4)} 0;
`;

export const StatisticList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

  box-shadow: ${props => props.theme.boxShadow.statItem};
`;

export const StatisticPercent = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
