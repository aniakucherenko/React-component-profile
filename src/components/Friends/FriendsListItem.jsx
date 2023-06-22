import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item}>
      <span
        className={` ${
          isOnline ? `${css.statusOnline}` : `${css.statusOffline}`
        }
      `}
      ></span>

      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
