import { Outlet } from 'react-router-dom';
import { Currency } from '../Currency/Currency';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>I'm header</header>
      <div>
      <Currency />
        I'm LAYOUT!
        <Outlet />
      </div>
    </div>
  );
};
