import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  height: 332px;
  background-color: ${props => props.theme.colors.cardBg};
  text-align: center;
  border-radius: ${props => props.theme.spacing(1)};
  box-shadow: ${props => props.theme.boxShadow.mainCard};
  overflow: hidden;

  svg {
    margin-right: ${props => props.theme.spacing(2)};
    color: ${props => props.theme.colors.svgIcon};
  }
`;

export const ProfileDescription = styled.div`
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const ProfileAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.avatar};
  margin-top: ${props => props.theme.spacing(14)};
  margin-bottom: ${props => props.theme.spacing(8)};
  box-shadow: ${props => props.theme.boxShadow.secondaryCard};
`;

export const ProfileName = styled.p`
  font-size: 20px;
  font-weight: 900;
  font-family: 'Armata';
  margin-bottom: ${props => props.theme.spacing(3)};
`;
export const ProfileInfo = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;
export const ProfileStats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
  background-color: ${props => props.theme.colors.itemBgSecondary};
`;

export const StatsList = styled.li`
  /* width: calc(100% / 3); */
`;

export const StatsItem = styled.span`
  display: flex;
  align-items: center;
`;
