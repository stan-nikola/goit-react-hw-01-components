export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li>
      <span className="status"></span>
      <img src={avatar} alt={name} width="48" />
      <p className="name"></p>
    </li>
  );
};
