import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const buildClassName = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div>
      <NavLink className={buildClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={buildClassName} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
