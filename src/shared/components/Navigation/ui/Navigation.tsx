import { useMemo } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import type { INavProps } from "../model/types";

import css from './navigation.module.scss';


export const Navigation: React.FC<INavProps> = ({ headerTheme = 'light', linkType, links }) => {

  
  const itemsWithIds = useMemo(() => {
    return links.map(item => ({
      ...item,
      id: item.id || crypto.randomUUID()
    }))
  }, [links])
  return (
    <nav className={clsx(css.navigation)}>
      <ul className={clsx(css.navigation__list, css[linkType],  {[css[headerTheme]]: linkType === 'header' })}>
        {itemsWithIds.map(item => (
          <li key={item.id} className={css.link_wrapper}>
            <Link to={item.to} className={clsx(css.link, css[linkType])} id={item.id}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
