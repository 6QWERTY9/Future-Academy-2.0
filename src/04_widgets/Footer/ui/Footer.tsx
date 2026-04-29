import { Navigation } from '@shared/components/Navigation';
import { FOOTER_DATA } from '../model/data';
import { FooterMainInfo } from './components/FooterMainInfo/FooterMainInfo';
import css from './footer.module.scss';


export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footer__content}>
        <FooterMainInfo/>
        <div className={css.footer__nav_wrapper}>
          {FOOTER_DATA.map(item => (
            <div key={item.id} className={css.nav_column}>
              <h4 className={css.nav_column__title}>{item.title}</h4>
              <Navigation linkType='footer' links={item.links}/>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
