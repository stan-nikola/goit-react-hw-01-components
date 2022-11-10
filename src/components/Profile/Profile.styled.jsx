import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  background-color: ${props => props.theme.colors.cardBg};
  text-align: center;
  border-radius: ${props => props.theme.radii.normal};
  overflow: hidden;

  svg {
    margin-right: ${props => props.theme.space[3]}px;
    color: ${props => props.theme.colors.svgIcon};
  }
  box-shadow: ${p => p.theme.shadows.mainCard};
`;

export const ProfileDescription = styled.div`
  margin-bottom: ${props => props.theme.space[5]}px;
`;

export const ProfileAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${props => props.theme.colors.avatar};
  margin-top: ${props => props.theme.space[6]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
`;

export const ProfileName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};

  margin-bottom: ${props => props.theme.space[4]}px;
`;
export const ProfileInfo = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[3]}px;
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
