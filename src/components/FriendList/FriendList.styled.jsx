import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 95%;
  height: 68px;
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.itemBg};
  box-shadow: ${p => p.theme.shadows.secondaryCard};

  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.itemBgSecondary};
  }
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
`;
function statusColor({ status }) {
  if (status) {
    return props => props.theme.colors.friendsOnline;
  } else return props => props.theme.colors.friendsOffline;
}

export const OnlineMarker = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${statusColor};
  margin: 0 ${props => props.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadows.cardItem};
`;

export const FriendAvatar = styled.img`
  background-color: ${props => props.theme.colors.avatar};
  border-radius: ${props => props.theme.radii.normal};
  padding: ${props => props.theme.space[2]}px;
  margin-right: ${props => props.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadows.cardItem};
`;
export const FriendName = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
`;
