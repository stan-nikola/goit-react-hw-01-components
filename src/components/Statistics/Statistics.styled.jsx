import styled from '@emotion/styled';

export const StatisticCard = styled.section`
  width: 300px;
  height: 104px;
  border-radius: ${props => props.theme.spacing(1)};
  background-color: #fff;
  box-shadow: ${props => props.theme.boxShadow.mainCard};
  overflow: hidden;
`;

export const StatisticTitle = styled.h2`
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  margin: ${props => props.theme.spacing(4)} 0;
`;

export const StatisticList = styled.ul`
  display: flex;
`;

function setBgColor({ type }) {
  switch (type) {
    case '.docx':
      return props => props.theme.colors.statDocx;
    case '.pdf':
      return props => props.theme.colors.statPdf;
    case '.mp3':
      return props => props.theme.colors.statMp3;
    case '.psd':
      return props => props.theme.colors.statPsd;
    default:
      return props => props.theme.colors.statDefault;
  }
}
export const StatisticItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: calc(100% / 5);
  height: 50px;
  background-color: ${setBgColor};

  box-shadow: ${props => props.theme.boxShadow.statItem};
`;

export const StatisticPercent = styled.span`
  font-style: 18px;
  font-weight: 600;
`;
