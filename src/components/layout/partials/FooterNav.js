import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
           {/* TODO: Update link here*/}
          <a href="https://t.me/joinchat/GbOgYo4HHeZNzyBM">Telegram</a>
        </li>
        <li>
          <Link to="#0">Discord</Link>
        </li>
        <li>
          <Link to="#0">Whatsapp</Link>
        </li>
        <li>
          <Link to="#0">Email</Link>
        </li>
        <li>
          <Link to="#hero">Litepaper</Link>
        </li>
      </ul>
    </nav>
  );  
}

export default FooterNav;