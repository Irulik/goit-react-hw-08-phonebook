import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user} = useAuth();


  const handelLogOut = () => dispatch(logOut());


  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span className={css.logInUser}>{user.name}</span>
      </p>
      <button className={css.btnLogin} type="button" onClick={handelLogOut}>
        Logout
      </button>
    </div>
  );
};
