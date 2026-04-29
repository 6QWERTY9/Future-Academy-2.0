import Logo from '@assets/logo.svg?react';

import FsIcon from '@assets/fs.svg?react';
import VkIcon from '@assets/vk.svg?react';
import TgIcon from '@assets/tg.svg?react';
import YtIcon from '@assets/yt.svg?react';
import InstIcon from '@assets/inst.svg?react';

import css from './index.module.scss';

export const FooterMainInfo = () => {
    return (
        <div className={css.footer__main_info}>
            <Logo width={83} height={58} className={css.footer_logo}/>
            <div className={css.information}>
                <a href="tel:+78009503398" className={css.tel}>8 800 950-33-98</a>
                <p className={css.address}>г. Москва, ул. Ленина, д. 50</p>
                <a href="mailto:info@hodfutureacademy.ru" className={css.email}>info@hodfutureacademy.ru</a>
            </div>
            <div className={css.social}>
                <a href="#" className={css.social_link}>
                    <VkIcon width={21} height={26}/>
                </a>
                <a href="#" className={css.social_link}>
                    <InstIcon width={16} height={26}/>
                </a>
                <a href="#" className={css.social_link}>
                    <FsIcon width={18} height={26}/>
                </a>
                <a href="#" className={css.social_link}>
                    <YtIcon width={21} height={26}/>
                </a>
                <a href="#" className={css.social_link}>
                    <TgIcon width={16} height={26}/>
                </a>
            </div>
            
        </div>
    )
}