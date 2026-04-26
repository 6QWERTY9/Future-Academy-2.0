import clsx from 'clsx';
import type { IHeaderProps } from '../model/types';
import Logo from '@assets/logo.svg?react';

import css from './header.module.scss';
import { headerNavData } from '../model/data';
import type { INavProps } from '@shared/components/Navigation/model/types';
import { Navigation } from '@shared/components/Navigation';


export default function Header({theme='light'}: IHeaderProps) {
  const navProps: INavProps = {
    ...headerNavData,
    headerTheme: theme
  }
  return (
    <header className={clsx(css.header, css[theme])}>
      <div className={css.header__content}>
        <Logo width={100} height={70} className={clsx(css.logo, css[theme])}/>
        <Navigation {...navProps}/>
      </div>
    </header>
  )
}
