import React from 'react';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import Stats from './Stats/Stats';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import './style.css';
import { user, stats } from '../Utils/DB';

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
