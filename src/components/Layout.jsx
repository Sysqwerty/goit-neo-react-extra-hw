import { Suspense } from 'react';
import AppBar from '@components/AppBar/AppBar';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
