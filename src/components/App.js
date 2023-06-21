import css from './App.module.css';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { FriendsList } from './Friends/FriendsList';
import friends from './Friends/friends.json';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload statistics" stats={data} />
      <FriendsList friends={friends} />
    </div>
  );
};
