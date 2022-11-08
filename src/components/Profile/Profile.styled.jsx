import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  background-color: #ffffff;
  text-align: center;
  padding: 8px;
  border-radius: 3px;
  margin-bottom: 14px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  svg {
    margin-right: 8px;
    color: #125782;
  }
`;

export const ProfileDescription = styled.div`
  margin-bottom: 15px;
`;

export const ProfileAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #1f89cb;
  margin-bottom: 10px;
`;

export const ProfileName = styled.p`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 10px;
`;
export const ProfileInfo = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const ProfileStats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const StatsList = styled.li``;

export const StatsItem = styled.span`
  display: flex;
  align-items: center;
`;
