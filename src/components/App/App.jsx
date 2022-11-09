import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../Profile/user.json';
import statDada from '../Statistics/data.json';
import friends from '../FriendList/friends.json';
import transactions from '../TransactionHistory/transactions.json';

import { Container, ProfileStats } from './App.styled';

export const App = () => {
  return (
    <Container>
      <ProfileStats>
        <Profile
          avatar={user.avatar}
          name={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
        <Statistics stats={statDada} title={'Upload stats'} />
        <Statistics stats={statDada} title={''} />
      </ProfileStats>

      <FriendList friends={friends} />
      <TransactionHistory transactItems={transactions} />
    </Container>
  );
};
