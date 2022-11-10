import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../../data/user.json';
import statDada from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import { Box } from 'components/Box/Box';

export const App = () => {
  return (
    <Box
      as="main"
      padding={3}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gridGap={4}
    >
      <Box as="section" display="flex" flexDirection="column">
        <Profile
          avatar={user.avatar}
          name={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
        <Statistics stats={statDada} title={'Upload stats'} />
      </Box>

      <FriendList friends={friends} />
      <TransactionHistory transactItems={transactions} />
    </Box>
  );
};
