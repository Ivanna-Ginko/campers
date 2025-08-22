import css from '../Button/Button.module.css';
import { Link } from 'react-router-dom';

export default function AppLink({

  to,
  children,
}) {
  return (
    <Link className={css.button}
      to={to}
    >
      {children}
    </Link>
  );
}