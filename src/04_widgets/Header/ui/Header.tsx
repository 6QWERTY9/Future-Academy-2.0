import clsx from 'clsx';
import { Link } from 'react-router-dom';

import type { IHeaderProps } from '../model/types';

import { Navigation } from '@shared/components/Navigation';
import { CitySelector } from '@features/CitySelector';

import type { INavProps } from '@shared/components/Navigation/model/types';

import { headerNavData } from '../model/data';

import Logo from '@assets/logo.svg?react';
import AuthIcon from '@assets/auth-icon.svg?react';

import css from './header.module.scss';



export default function Header({theme='light'}: IHeaderProps) {
  const navProps: INavProps = {
    ...headerNavData,
    headerTheme: theme
  }
  return (
    <header className={clsx(css.header, css[theme])}>
      <div className={css.header__content}>
        <Logo width={100} height={70} className={clsx(css.logo, css[theme])}/>
        <div className={css.nav_wrapper}>
          <Navigation {...navProps}/>
        </div>
        <div className={css.city_selector_wrapper}>
          <CitySelector headerTheme={theme}/>
        </div>

        <div className={css.header_actions}>
          <a href="tel:+78009503398" className={css.contact_us} aria-label='call us'>8 800 950-33-98 </a>
          <Link to={'/'} className={clsx(css.auth_link, css[theme])}>
            <AuthIcon width={18} height={18} className={clsx(css.auth_icon, css[theme])}/>
            Войти
          </Link>
        </div>
      </div>
    </header>
  )
}
