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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.itemBgSecondary};
  }
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;
function statusColor({ status }) {
  if (status) {
    return props => props.theme.colors.friendsOnline;
  } else return props => props.theme.colors.friendsOffline;
}

export const OnlineMarker = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${statusColor};
  margin: 0 ${props => props.theme.spacing(2)};
`;

export const FriendAvatar = styled.img`
  background-color: #1f89cb7e;
  border-radius: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(1)};
  margin-right: ${props => props.theme.spacing(2)};
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
export const FriendName = styled.p`
  font-weight: 600;
  font-style: 18px;
`;
