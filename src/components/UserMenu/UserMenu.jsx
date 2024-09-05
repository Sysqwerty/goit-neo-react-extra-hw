import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { logOut } from '@redux/auth/operations';
import { selectUser } from '@redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {name}</p>
      <Button type="button" variant="contained" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
