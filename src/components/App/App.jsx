import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import users from '../Profile/user.json';
import statDada from '../Statistics/data.json';
import friends from '../FriendList/friends.json';
import transactions from '../TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile profiles={users} />
      <Statistics stats={statDada} title={'Upload stats'} />
      <FriendList friends={friends} />
      <TransactionHistory transactItems={transactions} />
    </div>
  );
};
