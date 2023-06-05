import { PageNav } from "./PageNav/PageNav";

import { Profile } from "./t1/Profile";
import userData from "../Data/user.json";

import { Statistics } from "./t2/Statist";
import statsData from "../Data/stat.json"

import { FriendList } from "./t3/FriendsList";
import friendsData from "../Data/friends.json";

import { Transaction } from "./t4/Transaction";
import transactionsData from "../Data/transactions.json";

export const App = () => {
  return (
    <div>
     <PageNav/>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      
      <Transaction transactions={transactionsData} /> 
    </div>
  );
};
