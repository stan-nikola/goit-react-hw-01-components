import styled from '@emotion/styled';

export const FriendsCard = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: ${props => props.theme.colors.cardBg};
  border-radius: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(2)} 0;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 95%;
  height: ${props => props.theme.spacing(17)};
  border-radius: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.itemBg};
  box-shadow: ${props => props.theme.boxShadow.secondaryCard};

  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.itemBgSecondary};
  }
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(3)};
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
  border-radius: 50%;
  background-color: ${statusColor};
  margin: 0 ${props => props.theme.spacing(4)};
  box-shadow: ${props => props.theme.boxShadow.secondaryCard};
`;

export const FriendAvatar = styled.img`
  background-color: ${props => props.theme.colors.avatar};
  border-radius: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(1)};
  margin-right: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.boxShadow.statItem};
`;
export const FriendName = styled.p`
  font-weight: 600;
  font-style: 18px;
`;
